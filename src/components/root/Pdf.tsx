import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet , Image} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '~/lib/services';

const Pdf: React.FC = () => {
    const [courseData, setCourseData] = useState<undefined | Object>(undefined)
     const { checkoutId } = useParams();
    useEffect(() => {
      const data = fetchCourseById(checkoutId as string)
    setCourseData(data)
    }, [])
  return (
         <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>{courseData && courseData.title}</Text>
      <Text style={styles.author}>{courseData && courseData.instructor}</Text>
     <Image
        style={styles.image}
        src={courseData && courseData.image}
      />
      <Text style={styles.text}>
        {courseData && courseData.description}
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
  )
}
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
export default Pdf