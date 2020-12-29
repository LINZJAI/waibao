function initData() {
  let tieredRegister = {
    registerId: '',
    registerNo: '',
    massIncidentsContent: '',
    unknownName: '',
    name: '',
    sex: '',
    birthday: '',
    age: '',
    visitId: '',
    occupation: '',
    phone: '',
    idcard: '',
    address: '',
    wordAddress: '',
    toHispitalWay: '',
    patientSource: '',
    fromHospital: '',
    arriveInHospitalTime: '',
    diseaseTime: '',
    feeType: '',
    firstTreatment: '',
    keyDiseases: '',
    diagnosis: '',
    complaint: '',
    classification: '',
    status: '',
    createTime: '',
    creatorNo: '',
    creatorName: '',
    updateTime: '',
    updaterNo: '',
    updaterName: ''
  }

  let tieredMaster = {
    tieredTime: '',
    registerId: '',
    classification: '',
    reclassification: '',
    reclassificationReason: '',
    greenChannel: true,
    triageRegion: '',
    deptCode: '',
    deptName: '',
    bedLabel: '',
    registerType: '',
    assistantNum: '',
    signOfLife: '',
    consciousness: '',
    recordDate: '',
    heartRate: '',
    pulse: '',
    breath: '',
    temperature: '',
    spo2: '',
    systolicPressure: '',
    diastolicPressure: '',
    pain: '',
    painId: '',
    conk: '',
    conkId: '',
    vulnus: '',
    vulnusId: '',
    mews: '',
    mewsId: '',
    height: '',
    weight: '',
    bmi: '',
    sugar: '',
    pupil: '',
    receptionEmpNo: '',
    receptionEmpName: '',
    stateDesc: '',
    allergicHistory: '',
    infectionHistory: '',
    epidemiologyHistory: '',
    fallEval: '',
    preventMeasure: '',
    nutritionEval: '',
    religious: '',
    spirit: '',
    cognitive: '',
    eduLevel: '',
    psychological: '',
    social: '',
    economic: '',
    eduNeed: '',
    traffic: '',
    abuse: '',
    childrenGrowthEval: ''
  }
  return { tieredRegister, tieredMaster }
}

class AddModel {
  dictMap = {}

  diagNodeList = []

  // 分诊登记
  tieredRegister = initData().tieredRegister

  tieredMaster = initData().tieredMaster
  tieredAllergyList = []
  basicDataList = []
  getDictMap(key, cb) {
    cb((this.dictMap[key] || []).map(item => ({ value: item.name })))
  }
  init() {
    this.dictMap = {}
    this.tieredRegister = initData().tieredRegister
    this.tieredMaster = initData().tieredMaster
  }
}

export default new AddModel()
