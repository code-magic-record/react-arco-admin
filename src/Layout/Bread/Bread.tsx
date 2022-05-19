import React, { useEffect } from 'react'
import { Breadcrumb } from '@arco-design/web-react';
import { IconHome } from '@arco-design/web-react/icon';
const BreadcrumbItem = Breadcrumb.Item;

const Bread = () => {
  useEffect(() => {
    getBreadListByHostName()
  }, [])

  const getBreadListByHostName = () => {
    const hostname = window.location.hostname
    console.log(hostname, '??')
  }
  return (
    <div style={{ margin: '12px 0'}}>
      <Breadcrumb>
        <BreadcrumbItem>
          <IconHome/>
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default Bread
