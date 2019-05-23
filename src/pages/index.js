import React from 'react';
import styles from './index.less';
import { Table, Divider, Popconfirm } from 'antd';
import { hidden } from 'ansi-colors';
import { defaultProps } from 'antd-mobile/lib/search-bar/PropsType';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.refBox = React.createRef();
  }
  componentDidMount() {
    console.log("componentDidMount", this.refBox)    
    // 监听滚动条
    const tableList = Array.from(this.refBox.current.querySelectorAll('.ant-table-body'));
    this.tableList = tableList;
    tableList.forEach((table) => {
      table.addEventListener('scroll', this.handleTableScroll);
    });
    // 创建节点
    let newNode=document.createElement('span');
    newNode.innerHTML='总计：'

    //寻找radio的父节点并替换子节点
    let footer=this.refBox.current.querySelectorAll('.ant-table-fixed-left')
    const radio=footer[1].getElementsByTagName('label')
    
    let oldNode=radio[1].getElementsByTagName('span')
    radio[1].replaceChild(newNode,oldNode[0])
  }

  handleTableScroll = (e) => {
    const current = e.currentTarget;
    this.tableList.forEach((table) => {
      if (table !== current && table.scrollLeft !== current.scrollLeft) {
        table.scrollLeft = current.scrollLeft;
      }
    });
  }

  //汇总部分
  renderFooterTable = () => {
    let {columns,dataList}=this.props
    let footerActionColum={
      width: "100px",
    };
    let newColums=[...columns,footerActionColum]
    let footerSelection={
      selections:[
        {
          text:''
        }
      ]
    }
    return (
      <Table
        className={styles.footerTable}
        pagination={false}
        scroll={{ x: 'max-content'}}
        size="small"
        columns={newColums}
        dataSource={dataList}
        rowSelection={footerSelection}
      />
    );
  }

  render() {
   
    let mainActionColum={
      width: "100px",
      title: "操作",
      fixed: "right",
      render: (text, record) => {
        return (
          <div>
            <div style={{ float: "left" }}>
              <a >修改</a>
            </div>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </div>
        );
      },
    };
    
    let {columns,dataSource,rowSelection}=this.props
    let newColums=[...columns,mainActionColum]


    return (
        <div ref={this.refBox} style={{overflow:'hidden'}}>

          <Table
            bordered
            className={styles.mainTable}
            pagination={false}
            scroll={{ x:'max-content'}}
            size="small"
            columns={newColums}
            dataSource={dataSource}
            rowSelection={rowSelection}
            style={{overflowX:'hidden'}}
          />

          {this.renderFooterTable()}
        </div>
    );
  }
}





export default function(){
 let  defaultProps={
    rowSelection : {
      type: 'radio'
    }
    ,
    dataSource : [
      {
        "id": "f495fb4c-97e6-4fa4-b756-bd5cf56e1f09",
        "code": "X C R T Y",
        "name": "现场绕太阳",
        "typeid": 8,
        "typename": "食品类",
        "price": 50,
        "sellprice": 70,
        "vipprice": 56,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "ddfc6c0c-1437-495b-b40d-4aa2c7aa6e9a",
        "code": "A S S",
        "name": "阿萨飒",
        "typeid": 8,
        "typename": "食品类",
        "price": 50,
        "sellprice": 80,
        "vipprice": 64,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "d4631dd4-b27a-4a73-a266-",
        "code": "F G H J F G J H",
        "name": "法国海军放过机会",
        "typeid": 13,
        "typename": "显卡",
        "price": 30,
        "sellprice": 50,
        "vipprice": 40,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "d27323ed-b950-41ab-9cbc-08b",
        "code": "A S F",
        "name": "案说法",
        "typeid": 8,
        "typename": "食品类",
        "price": 50,
        "sellprice": 60,
        "vipprice": 48,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "cf981a8c-869c-4d29-aedb-11d414a77689",
        "code": "K B",
        "name": "可比",
        "typeid": 8,
        "typename": "食品类",
        "price": 80,
        "sellprice": 90,
        "vipprice": 85,
        "storage": 0,
        "createdAt": "2019-05-07T10:38:05+08:00",
        "deletedAt": null
      },
      {
        "id": "aa3f5f75-90eb-4bf6-9a24-1f7ac9310304",
        "code": "H J K",
        "name": "很健康",
        "typeid": 8,
        "typename": "食品类",
        "price": 40,
        "sellprice": 50,
        "vipprice": 40,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "8790edb2-2b71-48b4-b22f-75",
        "code": "F C G H",
        "name": "房产过户",
        "typeid": 13,
        "typename": "显卡",
        "price": 50,
        "sellprice": 70,
        "vipprice": 56,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "820500e3-5a1c-41b6-be38-e9200",
        "code": "Z Z S D F",
        "name": "这种士大夫",
        "typeid": 8,
        "typename": "食品类",
        "price": 40,
        "sellprice": 50,
        "vipprice": 40,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "64d2dbd3-cefd-4456-a54f-2cb",
        "code": "S D K F J H",
        "name": "水电开发计划",
        "typeid": 8,
        "typename": "食品类",
        "price": 40,
        "sellprice": 50,
        "vipprice": 40,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "51b082f5-268e-4c09-b08b-d19",
        "code": "N H A",
        "name": "你好啊",
        "typeid": 8,
        "typename": "食品类",
        "price": 50,
        "sellprice": 60,
        "vipprice": 48,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      },
      {
        "id": "487eb60c-42c4-4690-877a-9c6c1",
        "code": "Q W R",
        "name": "千万人",
        "typeid": 8,
        "typename": "食品类",
        "price": 50,
        "sellprice": 60,
        "vipprice": 48,
        "storage": 0,
        "createdAt": "2019-05-08T16:03:36+08:00",
        "deletedAt": null
      }
    ],
    
    // width 需根据内容设置 具体 'px' 宽度。 不可使用 '%' 
    columns : [
      {
        width: "150px",
        fixed: "left",
        "dataIndex": "id",
        "title": "Oid",
        "sort": "1",
        "key": "id",
      },
      {
        width: "150px",
        fixed: "left",
        "dataIndex": "code",
        "title": "商品编码",
        "sort": "5",
        "key": "code"
      },
      {
        width: "150px",
        "dataIndex": "name",
        "title": "商品名称",
        "sort": "10",
        "key": "name"
      },
      {
        width: "150px",
        "dataIndex": "typeid",
        "title": "商品类型关联id",
        "sort": "16",
        "key": "typeid"
      },
      {
        width: "150px",
        "dataIndex": "typename",
        "title": "商品类型",
        "sort": "15",
        "key": "typename"
      },
      {
        width: "150px",
        "dataIndex": "price",
        "title": "采购单价",
        "sort": "25",
        "key": "price"
      },
      {
        width: "150px",
        "dataIndex": "sellprice",
        "title": "销售单价",
        "sort": "30",
        "key": "sellprice"
      },
      {
        width: "150px",
        "dataIndex": "vipprice",
        "title": "会员售价",
        "sort": "35",
        "key": "vipprice"
      },
      {
        width: "150px",
        "dataIndex": "storage",
        "title": "库存",
        "sort": "40",
        "key": "storage"
      },
      {
        width: "150px",
        "dataIndex": "createdAt",
        "title": "创建日期",
        "sort": "45",
        "key": "createdAt"
      },
      {
        width: "150px",
    
        "dataIndex": "deletedAt",
        "title": "删除日期",
        "sort": "50",
        "key": "deletedAt"
      },
      
    ]
    ,
    dataList :[
    
      {
        "price": 57657,
      }
    ]
    
  }
  return <App {...defaultProps}/>
}

