import { isUrl } from '../utils/utils';

const menuData = [
  // {
  //   name: 'dashboard',
  //   icon: 'dashboard',
  //   path: 'dashboard',
  //   children: [
  //     {
  //       name: '分析页',
  //       path: 'analysis',
  //     },
  //     {
  //       name: '监控页',
  //       path: 'monitor',
  //     },
  //     {
  //       name: '工作台',
  //       path: 'workplace',
  //       // hideInBreadcrumb: true,
  //       // hideInMenu: true,
  //     },
  //   ],
  // },
  // {
  //   name: '表单页',
  //   icon: 'form',
  //   path: 'form',
  //   children: [
  //     {
  //       name: '基础表单',
  //       path: 'basic-form',
  //     },
  //     {
  //       name: '分步表单',
  //       path: 'step-form',
  //     },
  //     {
  //       name: '高级表单',
  //       authority: 'admin',
  //       path: 'advanced-form',
  //     },
  //   ],
  // },
  // {
  //   name: '列表页',
  //   icon: 'table',
  //   path: 'list',
  //   children: [
  //     {
  //       name: '查询表格',
  //       path: 'table-list',
  //     },
  //     {
  //       name: '标准列表',
  //       path: 'basic-list',
  //     },
  //     {
  //       name: '卡片列表',
  //       path: 'card-list',
  //     },
  //     {
  //       name: '搜索列表',
  //       path: 'search',
  //       children: [
  //         {
  //           name: '搜索列表（文章）',
  //           path: 'articles',
  //         },
  //         {
  //           name: '搜索列表（项目）',
  //           path: 'projects',
  //         },
  //         {
  //           name: '搜索列表（应用）',
  //           path: 'applications',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: '详情页',
  //   icon: 'profile',
  //   path: 'profile',
  //   children: [
  //     {
  //       name: '基础详情页',
  //       path: 'basic',
  //     },
  //     {
  //       name: '高级详情页',
  //       path: 'advanced',
  //       authority: 'admin',
  //     },
  //   ],
  // },
  // {
  //   name: '结果页',
  //   icon: 'check-circle-o',
  //   path: 'result',
  //   children: [
  //     {
  //       name: '成功',
  //       path: 'success',
  //     },
  //     {
  //       name: '失败',
  //       path: 'fail',
  //     },
  //   ],
  // },
  {
    name: '系统管理',
    icon: 'setting',
    path: 'system',
    children: [
      {
        name: '部门管理',
        icon: '',
        path: 'dept-management',
      },
      {
        name: '人员管理',
        icon: '',
        path: 'user-management',
      },
      {
        name: '角色管理',
        icon: '',
        path: 'role-management',
      },
      {
        name: '菜单管理',
        icon: '',
        path: 'menu-management',
      },
      {
        name: 'SQL监控',
        icon: '',
        path: 'sql-monitoring',
      },
      {
        name: '参数管理',
        icon: '',
        path: 'param-management',
      },
      {
        name: '系统日志',
        icon: '',
        path: 'log',
      },
      {
        name: '初始系统数据',
        icon: '',
        path: 'initial-system-data',
      },
      {
        name: '数据监测',
        icon: '',
        path: 'data-monitoring',
      },
    ],
  },
  {
    name: '供应链管理',
    icon: 'link',
    path: 'supply-chain',
    children: [
      {
        name: '设置零售价',
        icon: '',
        path: 'price-setting',
      },
      {
        name: '供应商管理',
        icon: '',
        path: 'supplier-management',
      },
      {
        name: '注册证管理',
        icon: '',
        path: 'register-management',
      },
      {
        name: '产品管理',
        icon: '',
        path: 'product-management',
      },
      {
        name: '调价管理',
        icon: '',
        path: 'price-management',
      },
      {
        name: '供应链统计',
        icon: 'supply-chain-sumary',
        path: '',
      },
    ],
  },
  {
    name: '库房管理',
    icon: 'home',
    path: 'warehouse',
    children: [
      {
        name: '库存查询',
        icon: '',
        path: 'stock-sumary',
      },
      {
        name: '上下限设置',
        icon: '',
        path: 'limit-setting',
      },
      {
        name: '缺货提醒',
        icon: '',
        path: '',
      },
      {
        name: '出库列表',
        icon: '',
        path: '',
      },
      {
        name: '入库列表',
        icon: '',
        path: '',
      },
      {
        name: '订单收货入库',
        icon: '',
        path: '',
      },
      {
        name: '特殊入库',
        icon: '',
        path: '',
      },
      {
        name: '特殊出库',
        icon: '',
        path: '',
      },
      {
        name: '库存盘点',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '采购管理',
    icon: 'shopping-cart',
    path: 'purchasing',
    children: [
      {
        name: '采购模板列表',
        icon: '',
        path: '',
      },
      {
        name: '采购申请',
        icon: '',
        path: '',
      },
      {
        name: '采购申请审核',
        icon: '',
        path: '',
      },
      {
        name: '待处理采购申请',
        icon: '',
        path: '',
      },
      {
        name: '采购订单管理',
        icon: '',
        path: '',
      },
      {
        name: '临时采购管理',
        icon: '',
        path: '',
      },
      {
        name: '手动创建订单',
        icon: '',
        path: '',
      },
      {
        name: '数据下载',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '请领管理',
    icon: 'form',
    path: 'request',
    children: [
      {
        name: '发放出库',
        icon: '',
        path: '',
      },
      {
        name: '请领申请',
        icon: '',
        path: '',
      },
      {
        name: '请领申请审核',
        icon: '',
        path: '',
      },
      {
        name: '科室请领计划',
        icon: '',
        path: '',
      },
      {
        name: '审核请领计划',
        icon: '',
        path: '',
      },
      {
        name: '请领计划汇总',
        icon: '',
        path: '',
      },
      {
        name: '配送单列表',
        icon: '',
        path: '',
      },
      {
        name: '收货入库',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '消耗管理',
    icon: 'upload',
    path: 'consumption',
    children: [
      {
        name: '消耗登记',
        icon: '',
        path: '',
      },
      {
        name: '产品消耗明细',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '试剂管理',
    icon: 'hourglass',
    path: 'reagent',
    children: [
      {
        name: '试剂消耗登记',
        icon: '',
        path: '',
      },
      {
        name: '试剂消耗明细',
        icon: '',
        path: '',
      },
      {
        name: '试剂分组统计',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '结算管理',
    icon: 'pay-circle-o',
    path: 'settlement',
    children: [
      {
        name: '待结算明细',
        icon: '',
        path: '',
      },
      {
        name: '结算单列表',
        icon: '',
        path: '',
      },
      {
        name: '发票列表',
        icon: '',
        path: '',
      },
      {
        name: '验收发票',
        icon: '',
        path: '',
      },
      {
        name: '发票接收统计',
        icon: '',
        path: '',
      },
      {
        name: '发票初审',
        icon: '',
        path: '',
      },
      {
        name: '发票核验单列表',
        icon: '',
        path: '',
      },
      {
        name: '发票复核单',
        icon: '',
        path: '',
      },
      {
        name: '复核单审核',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '手术室管理',
    icon: 'medicine-box',
    path: 'operating-room',
    children: [
      {
        name: '登记使用与计费',
        icon: '',
        path: '',
      },
      {
        name: '登记使用（无计费）',
        icon: '',
        path: '',
      },
      {
        name: '配送申请',
        icon: '',
        path: '',
      },
      {
        name: '手术分配',
        icon: '',
        path: '',
      },
      {
        name: '产品使用统计--患者',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '财务管理',
    icon: 'bank',
    path: 'financial',
    children: [
      {
        name: '应付账款明细',
        icon: '',
        path: '',
      },
      {
        name: '物资收发帐汇总',
        icon: '',
        path: '',
      },
      {
        name: '供应商采购量汇总',
        icon: '',
        path: '',
      },
      {
        name: '科室用量汇总',
        icon: '',
        path: '',
      },
      {
        name: '发票列表',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '统计分析',
    icon: 'area-chart',
    path: 'statistical-analysis',
    children: [
      {
        name: '采购量分析',
        icon: '',
        path: '',
      },
      {
        name: '供应商到货周期',
        icon: '',
        path: '',
      },
      {
        name: '库存量统计',
        icon: '',
        path: '',
      },
      {
        name: '耗占比分析',
        icon: '',
        path: '',
      },
      {
        name: '消耗量分析',
        icon: '',
        path: '',
      },
      {
        name: '试剂利用率统计',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '全程追溯',
    icon: 'usb',
    path: 'full-traceability',
    children: [
      {
        name: '产品追溯',
        icon: '',
        path: '',
      },
      {
        name: '患者追溯',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '基础资料',
    icon: 'copy',
    path: 'basic-information',
    children: [
      {
        name: '打印测试',
        icon: '',
        path: '',
      },
      {
        name: '单据编码规则',
        icon: '',
        path: '',
      },
      {
        name: '库房地址管理',
        icon: '',
        path: '',
      },
      {
        name: '产品导入',
        icon: '',
        path: '',
      },
      {
        name: '库房管理',
        icon: '',
        path: '',
      },
      {
        name: '产品分类管理',
        icon: '',
        path: '',
      },
      {
        name: '出入库类型',
        icon: '',
        path: '',
      },
      {
        name: '计量单位管理',
        icon: '',
        path: '',
      },
      {
        name: '检验设备维护',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '设备管理',
    icon: 'tool',
    path: 'equipment',
    children: [
      {
        name: '设备维修',
        icon: '',
        path: '',
      },
      {
        name: '常规设备维修',
        icon: '',
        path: '',
      },
      {
        name: '预算任务列表',
        icon: '',
        path: '',
      },
      {
        name: '设备维保',
        icon: '',
        path: '',
      },
      {
        name: '履约项目',
        icon: '',
        path: '',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
