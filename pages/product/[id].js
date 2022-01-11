import React from 'react'
import Collections from '../components/Collections'
import { useRouter } from 'next/router'

export default function product() {
      const router = useRouter()
      const props = router.query;
      console.log("🚀 ~ file: products.js ~ line 7 ~ products ~ router", props)
      // console.log("🚀 ~ file: Products.js ~ line 8 ~ Products ~ props", props)
      return 'products'
      // return <Collections />
}