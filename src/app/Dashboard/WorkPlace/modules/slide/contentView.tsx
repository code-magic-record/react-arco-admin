import { Card, Grid, Link, Radio, Table } from '@arco-design/web-react'
import { useRequest } from 'ahooks'
import axios from 'axios'
import React, { useState } from 'react'
import ConentChart from '../chart/conentChart'
import { haderList } from '../config'
import '../../mock/index'
import '../../mock'
import styles from './style/content.module.less'

const { Row, Col } = Grid

const Index = () => {
  const [type, setType] = useState(1)
  const [page, setPage] = useState<number | undefined>(1)
  const [total, setTotal] = useState<number | undefined>(0)
  const [data, setData] = useState<Array<any>>([])

  const getList = ({ page = 0 }) => {
    return axios.get(`/api/workplace/popular-contents?page=${page}&pageSize=5&category=${type}`)
  }

  const { loading } = useRequest((params) => getList(params), {
    refreshDeps: [page, type],
    defaultParams: [
      {
        page: page,
      },
    ],
    onSuccess: (res) => {
      const {
        data: { list, total },
      } = res
      setTotal(total)
      if (Array.isArray(list)) {
        setData([...list])
      }
    },
  })

  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      width: 65,
    },
    {
      title: '点击量',
      dataIndex: 'pv',
      width: 100,
      render: (text: number) => {
        return `${text / 1000}k`
      },
    },
    {
      title: '日涨幅',
      dataIndex: 'increase',
      sorter: (a: { increase: number }, b: { increase: number }) => a.increase - b.increase,
      width: 110,
    },
  ]

  return (
    <Row gutter={24} className={styles.content}>
      <Col span={12}>
        <Card headerStyle={{ border: 'none' }} bordered={false} title="线上热门内容" extra={<Link>查看更多</Link>}>
          <Radio.Group type="button" name="type" value={type} onChange={setType} style={{ marginBottom: 20 }}>
            {haderList.map((item) => (
              <Radio value={item.id} key={item.id}>
                {item.title}
              </Radio>
            ))}
          </Radio.Group>
          <Table
            border={false}
            rowKey="rank"
            columns={columns}
            data={data}
            loading={loading}
            tableLayoutFixed
            onChange={(pagination) => {
              setPage(pagination.current)
            }}
            pagination={{ total, current: page, pageSize: 5, simple: true }}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card headerStyle={{ border: 'none' }} bordered={false} title="内容类别占比">
          <ConentChart />
        </Card>
      </Col>
    </Row>
  )
}

export default Index
