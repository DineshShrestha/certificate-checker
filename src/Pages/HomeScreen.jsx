import React from 'react'
import Hero from '../components/Hero'
import CertificateChecker from '../components/CertificateChecker'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Customer from '../components/Customer'

export default function HomeScreen() {
  return (
    <>
      <Hero/>
      <CertificateChecker/>
      <Feature/>
      <Pricing/>
      <Customer/>
    </>
  )
}
