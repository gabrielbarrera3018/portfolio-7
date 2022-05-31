import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/layouts/Header";
import Projetos from "../components/pages/Projetos";
import 'swiper/css';

export default function Home() {
  return (
      <>
          <div>
              <Projetos></Projetos>


          </div>
      </>
  )
}
