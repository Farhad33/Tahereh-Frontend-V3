import React from 'react'
// import Collections from '../components/Collections'
import { useRouter } from 'next/router'

export default function product() {
      const router = useRouter()
      const props = router.query;
      console.log('product is => ', props)
      return ''
}