import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '~/components/shared/Container';
import PostMetaTitle from '~/components/shared/PostMetaTitle';
import { fetchCourseBySlug } from '~/lib/services';
import Loader from '../shared/Loader';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const lowercaseTitle = (title: string): string => {
  const splittedTitle = title.split(' ');
  const lCaseTitle = splittedTitle.map((item) => item.toLowerCase());
  return lCaseTitle.join(' ');
};

const ref = React.createRef();

const CourseScreen: React.FC = () => {
  const [courseData, setCourseData] = useState<Object | undefined>(undefined);
  const { courseId } = useParams();
  useEffect(() => {
    const data = fetchCourseBySlug(`course/${courseId}`);
    setCourseData(data);
  }, []);

  if (!courseData) {
    return <Loader />;
  }
  //@ts-ignore
  const { category, title, image, instructor, content, lastUpdated } = courseData;

<button className="text-lg btn">Download</button>
  return (
   <div ref={ref}>
     <Container>
      <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
        <PostMetaTitle category={category} title={title} isShowLink={false} center slug="/" />
      </div>
      <div className="md:w-10/12 w-full mx-auto my-10">
        <img width={830} height={580} src={image} className="w-full rounded-lg" alt="Thumbnail" />
      </div>
      <p className="text-center text-base">
        {title}. {instructor}
      </p>

      <div className="w-full text-center mb-4 mt-8">
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="text-lg btn">Download</button>}
      </Pdf>
        {' '}
      </div>

      {content?.description ? (
        <div>
          <h3 className="text-2xl mb-4 mt-8">What you will learn from {lowercaseTitle(title)} course</h3>
          <ul className="list-disc list-inside">
            {content.description.map((item, key) => (
              <li key={key} className="mt-2 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {content?.requirementsDescription ? (
        <div>
          <h3 className="text-2xl mb-4 mt-8">Requirements</h3>
          <ul className="list-disc list-inside">
            {content?.requirementsDescription.map((item, key) => (
              <li key={key} className="mt-2 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {content?.courseDescription ? (
        <div className="my-4 text-xl">
          <h3 className="text-2xl mb-4 mt-8">Description</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: content.courseDescription,
            }}
          ></div>
        </div>
      ) : null}

      {content?.targetAudienceDescription ? (
        <div>
          <h3 className="text-2xl mb-4 mt-8">Who should take {lowercaseTitle(title)} course:</h3>
          <ul className="list-disc list-inside">
            {content?.targetAudienceDescription.map((item, key) => (
              <li key={key} className="mt-2 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {lastUpdated ? <p className="text-lg mb-4 mt-8">{lastUpdated}</p> : null}

      <div className="w-full text-center mb-4 mt-8">
        <Link to={`/checkout/${courseData.id}`} className="text-lg btn">Get premium access</Link>{' '}
      </div>
    </Container>
   </div>
  );
};

export default CourseScreen;
