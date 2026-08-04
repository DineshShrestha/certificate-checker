import React from 'react'
import Hero from '../components/Hero'
import CertificateChecker from '../components/CertificateChecker'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Customer from '../components/Customer'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function HomeScreen() {
  useDocumentTitle('Certificate Checker - Free SSL/TLS Certificate Lookup')
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
