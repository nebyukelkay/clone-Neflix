import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RowList from '../../components/Rows/RowList/RowList'
import Banner from '../../components/banner/Banner'

const Home = () => {
    return (
        <>
            <Header />
            <Banner/>
            <RowList />
            <Footer />
        </>
    )
}

export default Home