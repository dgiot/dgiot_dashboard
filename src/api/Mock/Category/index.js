const data = [
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '智能城市',
      Id: 1,
      SuperId: 0,
      key: 'category',
    },
    type: 'SmartCity',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '电子取证',
      Id: 20,
      SuperId: 0,
      key: 'category',
    },
    type: 'Evidence',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '数蛙工业网关',
      Id: 30,
      SuperId: 0,
      key: 'category',
    },
    type: 'IotHub',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: 'Zeta设备',
      Id: 40,
      SuperId: 0,
      key: 'category',
    },
    type: 'ZetaDevice',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '数蛙压测',
      Id: 50,
      SuperId: 0,
      key: 'category',
    },
    type: 'ShuwaStressTest',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '大气监测设备',
      Id: 33,
      SuperId: 16,
      key: 'category',
    },
    type: 'AirCollect',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '燃气热水器',
      Id: 81,
      SuperId: 63,
      key: 'category',
    },
    type: 'GasWaterHeater',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: 'DLT645电表',
      Id: 406,
      SuperId: 258,
      key: 'category',
    },
    type: 'MeterElec_Dlt645',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '空调机',
      Id: 84,
      SuperId: 63,
      key: 'category',
    },
    type: 'AirConditioning',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '插座',
      Id: 60,
      SuperId: 58,
      key: 'category',
    },
    type: 'Outlet',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '燃气报警器',
      Id: 43,
      SuperId: 42,
      key: 'category',
    },
    type: 'GasDetector',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '空气净化器',
      Id: 83,
      SuperId: 54,
      key: 'category',
    },
    type: 'AirPurifier',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '水浸报警器',
      Id: 44,
      SuperId: 42,
      key: 'category',
    },
    type: 'WaterDetector',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '微波炉',
      Id: 131,
      SuperId: 66,
      key: 'category',
    },
    type: 'MicrowaveOven',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '智能门锁',
      Id: 120,
      SuperId: 42,
      key: 'category',
    },
    type: 'SmartDoor',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '破壁机',
      Id: 130,
      SuperId: 66,
      key: 'category',
    },
    type: 'BreakingMachine',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '仓储运输环境检测设备',
      Id: 354,
      SuperId: 2,
      key: 'category',
    },
    type: 'Logisticsmonitoring',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '空调温控器',
      Id: 341,
      SuperId: 301,
      key: 'category',
    },
    type: 'Airconditionerthermostat',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '门禁对讲机',
      Id: 413,
      SuperId: 258,
      key: 'category',
    },
    type: 'SmartDoorIntercoms',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '面包机',
      Id: 176,
      SuperId: 66,
      key: 'category',
    },
    type: 'BreadMachine',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '冲压机',
      Id: 339,
      SuperId: 335,
      key: 'category',
    },
    type: 'PunchingMachine',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '自动门',
      Id: 437,
      SuperId: 78,
      key: 'category',
    },
    type: 'AutoDoor',
  },
  {
    ACL: {
      '*': {
        read: true,
        write: false,
      },
    },
    data: {
      CategoryName: '烤箱',
      Id: 219,
      SuperId: 66,
      key: 'category',
    },
    type: 'Oven',
  },
]
export default data
