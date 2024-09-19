module.exports = {
    code: "zh-TW",  
    name: "中文-繁体",  
    hint: "提示",  
    confirm: "確認",  
    cancel: "取消",  
    expand: "展開",  
    collapse: "收起",  
    count: "總數",  
    refresh: "刷新",  
    version: {  
        message: "發現新版本{latest}\n{releaseBody}",  
        simpleMessage: "發現新版本{latest}，更新了許多功能，是否要下載最新版本？",  
        title: "發現新版本",  
        noRemindCurrnetVersion: "不再提醒更新當前版本",  
        yes: "是",  
        no: "否"  
    },  
    base: {  
        modify: "修改",  
        delete: "刪除",  
        confirm: "確認",  
        cancel: "取消",  
        close: "關閉",  
        save: "保存",  
        saveSuccess: "保存成功",  
        saveError: "保存失敗",  
        deleteSuccess: "刪除成功",  
        saveErrorMessage: "保存失敗，原因：{e}",  
        hintTitle: "提示",  
        yes: "是",  
        no: "否",  
        refresh: "刷新",  
        connectTimeOut: "連線超時"  
    },  
    menu: {  
        addConnect: "新增連線",  
        datasource: "資料來源",  
        settings: "設置",  
        plugins: "插件",  
        reportBug: "上報問題",  
        myCollection: "我的收藏",  
        invokeHistory: "調用歷史",  
    },  
    welcome: {  
        productName: "Dubbo 桌面管理工具",  
        version: "版本："  
    },  
    settings: {  
        baseSettings: {  
            title: "基本設置",  
            language: "語言",  
            jvmArgs: "JVM參數",  
            jvmArgsTips: "請輸入JVM參數，如:-Xmx512m"  
        },  
        apply: "應用",  
        invokerSettings: {  
            title: "執行器設置",  
            invokerType: "預設執行器類型",  
            invokerTypeTips: "使用Java執行器時，請先安裝Java環境，Java調用相對Telnet執行器較慢，但是Java調用返回的資訊更加完整。"  
        }  
    },  
    tab: {  
        close: "關閉",  
        closeOther: "關閉其他",  
        closeAll: "關閉全部",  
        refresh: "刷新"  
    },  
    editor: {  
        copy: "複製",  
        copySuccess: "複製成功",  
        collectSuccess: "收藏成功"  
    },  
    dynamicForm: {  
        validateMessage: {  
            timeOutNotNull: "超時時間不能為空",  
            inputNumber: "請輸入數字",  
            inputNumberRange: "必須大於10ms",  
            inputName: "請輸入連線名稱",  
            rangeLimit: "長度在 1 到 32 個字元",  
            inputConnectionAddress: "請輸入連線地址"  
        }  
    },  
    telnetTerminal: {  
        connecting: "正在連線 {ip} {port}",  
        connectionTimeout: "連線超時，請檢查網路! {ip} {port}",  
        connectionClosed: "連線斷開，正在重新連線...",  
    },  
    connect: {  
        addConnect: "新建連線",  
        modifyConnect: "修改連線",  
        name: "連線名稱",  
        type: "類型",  
        save: "立即創建",  
  
        validateMessage: {  
            inputName: "請輸入連線名稱",  
            rangeLimit: "長度在 1 到 32 個字元"  
        },  
  
        createSuccess: "新增連線成功!",  
        updateSuccess: "修改連線成功!",  
        open: "打開資料來源",  
        searchContent: "搜一搜",  
        refreshSuccess: "刷新服務列表完成",  
        refreshError: "刷新服務列表失敗！原因：{e}",  
        confirmDeleteConnect: "此操作將永久刪除連線, 是否繼續?",  
  
        getFromDataError: "獲取資料來源表單錯誤! 原因: {e}",  
        getServiceListError: "獲取服務列表錯誤! 原因: {e}",  
        getProviderListError: "獲取提供者列表錯誤! 原因: {e}",  
        getConsumerListError: "獲取消費者列表錯誤! 原因: {e}",  
        invokeMethodError: "調用接口錯誤! 原因:{e}",  
        disableProviderError: "禁用提供者失敗！原因：{e}",  
        enableProviderError: "啟用提供者失敗！原因：{e}",  
    },  
    service: {  
        callTitle: "調用 {address}",  
    },  
    collect: {  
        collect: "收藏接口",  
        open: "打開",  
        copyInterfaceName: "複製接口名",  
        cancel: "取消收藏",  
        newGroup: "新分組",  
        inputGroupName: "請輸入新分組",  
        defaultGroup: "請選擇已存在的分組，或者輸入新分組",  
        group: "分組",  
        name: "名稱",  
        update: "修改"  
    }  
}
