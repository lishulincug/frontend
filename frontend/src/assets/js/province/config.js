function getProvinceConfig(province_pinyin){
	var config = [];
        config['beijing'] = [
            {name:'延庆区',value:0},
            {name:'怀柔区',value:0},
            {name:'密云区',value:0},
            {name:'平谷区',value:0},
            {name:'顺义区',value:0},
            {name:'昌平区',value:0},
            {name:'门头沟区',value:0},
            {name:'海淀区',value:0},
            {name:'朝阳区',value:0},
            {name:'通州区',value:0},
            {name:'丰台区',value:0},
            {name:'房山区',value:0},
            {name:'大兴区',value:0},
            {name:'石景山区',value:0},
            {name:'西城区',value:0},
            {name:'东城区',value:0}
	];
        
        config['tianjin'] = [
            {name:'宝坻区',value:0},
            {name:'武清区',value:0},
            {name:'宁河区',value:0},
            {name:'北辰区',value:0},
            {name:'东丽区',value:0},
            {name:'滨海新区',value:0},
            {name:'津南区',value:0},
            {name:'西青区',value:0},
            {name:'静海区',value:0},
            {name:'河东区',value:0},
            {name:'河西区',value:0},
            {name:'南开区',value:0},
            {name:'和平区',value:0},
            {name:'红桥区',value:0},
            {name:'河北区',value:0}
	];
        
        config['shanghai'] = [ 
            {name:'嘉定区',value:0},
            {name:'宝山区',value:0},
            {name:'浦东新区',value:0},
            {name:'青浦区',value:0},
            {name:'松江区',value:0},
            {name:'金山区',value:0},
            {name:'奉贤区',value:0},
            {name:'闵行区',value:0},
            {name:'徐汇区',value:0},
            {name:'长宁区',value:0},
            {name:'普陀区',value:0},
            {name:'黄浦区',value:0},
            {name:'虹口区',value:0},
            {name:'静安区',value:0},
            {name:'杨浦区',value:0}
	];
        
        config['chongqing'] = [
            {name:'城口县',value:0},
            {name:'巫溪县',value:0},
            {name:'巫山县',value:0},
            {name:'奉节县',value:0},
            {name:'云阳县',value:0},
            {name:'万州区',value:0},
            {name:'梁平县',value:0},
            {name:'垫江县',value:0},
            {name:'忠县',value:0},
            {name:'石柱土家族自治县',value:0},
            {name:'丰都县',value:0},
            {name:'长寿区',value:0},
            {name:'涪陵区',value:0},
            {name:'黔江区',value:0},
            {name:'彭水苗族土家族自治县',value:0},
            {name:'酉阳土家族苗族自治县',value:0},
            {name:'秀山土家族苗族自治县',value:0},
            {name:'武隆县',value:0},
            {name:'南川区',value:0},
            {name:'綦江区',value:0},
            {name:'江津区',value:0},
            {name:'永川区',value:0},
            {name:'荣昌区',value:0},
            {name:'大足区',value:0},
            {name:'潼南区',value:0},
            {name:'合川区',value:0},
            {name:'铜梁区',value:0},
            {name:'北碚区',value:0},
            {name:'璧山区',value:0},
            {name:'九龙坡区',value:0},
            {name:'沙坪坝区',value:0},
            {name:'江北区',value:0},
            {name:'巴南区',value:0},
            {name:'大渡口区',value:0},
            {name:'南岸区',value:0},
            {name:'渝北区',value:0},
            {name:'渝中区',value:0}
	];
        
        config['xianggang'] = [ //香港
            {name:'香港',value:0}
	];
        
        config['taiwan'] = [ //台湾
            {name:'台湾',value:0}
	];
        
        config['aomen'] = [ //澳门
            {name:'澳门',value:0}
	];
        
        config['liaoning'] = [ //辽宁
            {name:'朝阳市',value:0},
            {name:'阜新市',value:0},
            {name:'锦州市',value:0},
            {name:'葫芦岛市',value:0},
            {name:'盘锦市',value:0},
            {name:'营口市',value:0},
            {name:'辽阳市',value:0},
            {name:'鞍山市',value:0},
            {name:'沈阳市',value:0},
            {name:'铁岭市',value:0},
            {name:'抚顺市',value:0},
            {name:'本溪市',value:0},
            {name:'丹东市',value:0},
            {name:'大连市',value:0}
	];
        
        config['jilin'] = [ //吉林
            {name:'白城市',value:0},
            {name:'松原市',value:0},
            {name:'四平市',value:0},
            {name:'长春市',value:0},
            {name:'吉林市',value:0},
            {name:'辽源市',value:0},
            {name:'通化市',value:0},
            {name:'白山市',value:0},
            {name:'延边朝鲜族自治州',value:0}
	];
        
        config['heilongjiang'] = [ //黑龙江
            {name:'大兴安岭地区',value:0},
            {name:'黑河市',value:0},
            {name:'齐齐哈尔市',value:0},
            {name:'大庆市',value:0},
            {name:'绥化市',value:0},
            {name:'伊春市',value:0},
            {name:'哈尔滨市',value:0},
            {name:'鹤岗市',value:0},
            {name:'佳木斯市',value:0},
            {name:'双鸭山市',value:0},
            {name:'七台河市',value:0},
            {name:'鸡西市',value:0},
            {name:'牡丹江市',value:0}
	];
        
        config['hebei'] = [ //河北
            {name:'张家口市',value:0},
            {name:'承德市',value:0},
            {name:'保定市',value:0},
            {name:'廊坊市',value:0},
            {name:'唐山市',value:0},
            {name:'秦皇岛市',value:0},
            {name:'石家庄市',value:0},
            {name:'沧州市',value:0},
            {name:'衡水市',value:0},
            {name:'邢台市',value:0},
            {name:'邯郸市',value:0}
	];
        
        config['henan'] = [ //河南
            {name:'安阳市',value:0},
            {name:'鹤壁市',value:0},
            {name:'濮阳市',value:0},
            {name:'新乡市',value:0},
            {name:'焦作市',value:0},
            {name:'济源市',value:0},
            {name:'郑州市',value:0},
            {name:'开封市',value:0},
            {name:'商丘市',value:0},
            {name:'洛阳市',value:0},
            {name:'平顶山市',value:0},
            {name:'三门峡市',value:0},
            {name:'南阳市',value:0},
            {name:'漯河市',value:0},
            {name:'许昌市',value:0},
            {name:'周口市',value:0},
            {name:'驻马店市',value:0},
            {name:'信阳市',value:0}
	];
        
        config['neimenggu'] = [ //内蒙古
            {name:'呼伦贝尔市',value:0},
            {name:'兴安盟',value:0},
            {name:'通辽市',value:0},
            {name:'赤峰市',value:0},
            {name:'锡林郭勒盟',value:0},
            {name:'乌兰察布市',value:0},
            {name:'呼和浩特市',value:0},
            {name:'包头市',value:0},
            {name:'巴彦淖尔市',value:0},
            {name:'鄂尔多斯市',value:0},
            {name:'乌海市',value:0},
            {name:'阿拉善盟',value:0}
	];
        
        config['shandong'] = [ //山东
            {name:'威海市',value:0},
            {name:'烟台市',value:0},
            {name:'青岛市',value:0},
            {name:'潍坊市',value:0},
            {name:'日照市',value:0},
            {name:'临沂市',value:0},
            {name:'枣庄市',value:0},
            {name:'济宁市',value:0},
            {name:'菏泽市',value:0},
            {name:'泰安市',value:0},
            {name:'聊城市',value:0},
            {name:'莱芜市',value:0},
            {name:'淄博市',value:0},
            {name:'济南市',value:0},
            {name:'德州市',value:0},
            {name:'滨州市',value:0},
            {name:'东营市',value:0}
	];
        
        config['shanxi'] = [ //山西
            {name:'大同市',value:0},
            {name:'朔州市',value:0},
            {name:'忻州市',value:0},
            {name:'太原市',value:0},
            {name:'阳泉市',value:0},
            {name:'晋中市',value:0},
            {name:'吕梁市',value:0},
            {name:'临汾市',value:0},
            {name:'长治市',value:0},
            {name:'运城市',value:0},
            {name:'晋城市',value:0}
	];
        
        config['shanxi1'] = [ //陕西
            {name:'榆林市',value:0},
            {name:'延安市',value:0},
            {name:'铜川市',value:0},
            {name:'渭南市',value:0},
            {name:'咸阳市',value:0},
            {name:'西安市',value:0},
            {name:'商洛市',value:0},
            {name:'宝鸡市',value:0},
            {name:'安康市',value:0},
            {name:'汉中市',value:0}
	];
        
        config['ningxia'] = [ //宁夏
            {name:'石嘴山市',value:0},
            {name:'银川市',value:0},
            {name:'吴忠市',value:0},
            {name:'中卫市',value:0},
            {name:'固原市',value:0}
	];
        
        config['anhui'] = [ //安徽
            {name:'亳州市',value:0},
            {name:'淮北市',value:0},
            {name:'宿州市',value:0},
            {name:'蚌埠市',value:0},
            {name:'阜阳市',value:0},
            {name:'淮南市',value:0},
            {name:'滁州市',value:0},
            {name:'合肥市',value:0},
            {name:'六安市',value:0},
            {name:'马鞍山市',value:0},
            {name:'芜湖市',value:0},
            {name:'铜陵市',value:0},
            {name:'宣城市',value:0},
            {name:'池州市',value:0},
            {name:'安庆市',value:0},
            {name:'黄山市',value:0}
	];
        
        config['jiangsu'] = [ //江苏
            {name:'徐州市',value:0},
            {name:'连云港市',value:0},
            {name:'宿迁市',value:0},
            {name:'淮安市',value:0},
            {name:'盐城市',value:0},
            {name:'扬州市',value:0},
            {name:'泰州市',value:0},
            {name:'南通市',value:0},
            {name:'镇江市',value:0},
            {name:'南京市',value:0},
            {name:'常州市',value:0},
            {name:'无锡市',value:0},
            {name:'苏州市',value:0}
	];
        
        config['zhejiang'] = [ //浙江
            {name:'湖州市',value:0},
            {name:'嘉兴市',value:0},
            {name:'杭州市',value:0},
            {name:'绍兴市',value:0},
            {name:'宁波市',value:0},
            {name:'舟山市',value:0},
            {name:'金华市',value:0},
            {name:'衢州市',value:0},
            {name:'丽水市',value:0},
            {name:'台州市',value:0},
            {name:'温州市',value:0}
	];
        
        config['jiangxi'] = [ //江西
            {name:'九江市',value:0},
            {name:'景德镇市',value:0},
            {name:'南昌市',value:0},
            {name:'上饶市',value:0},
            {name:'鹰潭市',value:0},
            {name:'抚州市',value:0},
            {name:'新余市',value:0},
            {name:'宜春市',value:0},
            {name:'萍乡市',value:0},
            {name:'吉安市',value:0},
            {name:'赣州市',value:0}
	];
        
        config['hunan'] = [ //湖南
            {name:'张家界市',value:0},
            {name:'常德市',value:0},
            {name:'岳阳市',value:0},
            {name:'益阳市',value:0},
            {name:'长沙市',value:0},
            {name:'怀化市',value:0},
            {name:'湘西土家族苗族自治州',value:0},
            {name:'娄底市',value:0},
            {name:'湘潭市',value:0},
            {name:'株洲市',value:0},
            {name:'邵阳市',value:0},
            {name:'衡阳市',value:0},
            {name:'郴州市',value:0},
            {name:'永州市',value:0}
	];
        
        config['hubei'] = [ //湖北
            {name:'十堰市',value:0},
            {name:'襄阳市',value:0},
            {name:'神农架林区',value:0},
            {name:'恩施土家族苗族自治州',value:0},
            {name:'宜昌市',value:0},
            {name:'荆门市',value:0},
            {name:'随州市',value:0},
            {name:'荆州市',value:0},
            {name:'潜江市',value:0},
            {name:'天门市',value:0},
            {name:'孝感市',value:0},
            {name:'仙桃市',value:0},
            {name:'武汉市',value:0},
            {name:'咸宁市',value:0},
            {name:'黄冈市',value:0},
            {name:'鄂州市',value:0},
            {name:'黄石市',value:0}
	];
        
        config['fujian'] = [ //福建
            {name:'南平市',value:0},
            {name:'宁德市',value:0},
            {name:'三明市',value:0},
            {name:'福州市',value:0},
            {name:'莆田市',value:0},
            {name:'泉州市',value:0},
            {name:'龙岩市',value:0},
            {name:'漳州市',value:0},
            {name:'厦门市',value:0}
	];
        
        config['guangdong'] = [ //广东
            {name:'韶关市',value:0},
            {name:'河源市',value:0},
            {name:'梅州市',value:0},
            {name:'潮州市',value:0},
            {name:'揭阳市',value:0},
            {name:'汕头市',value:0},
            {name:'汕尾市',value:0},
            {name:'惠州市',value:0},
            {name:'清远市',value:0},
            {name:'广州市',value:0},
            {name:'东莞市',value:0},
            {name:'深圳市',value:0},
            {name:'佛山市',value:0},
            {name:'肇庆市',value:0},
            {name:'云浮市',value:0},
            {name:'江门市',value:0},
            {name:'中山市',value:0},
            {name:'珠海市',value:0},
            {name:'阳江市',value:0},
            {name:'茂名市',value:0},
            {name:'湛江市',value:0}
	];

        config['guangxi'] = [ //广西
            {name:'桂林市',value:0},
            {name:'柳州市',value:0},
            {name:'贺州市',value:0},
            {name:'梧州市',value:0},
            {name:'来宾市',value:0},
            {name:'贵港市',value:0},
            {name:'玉林市',value:0},
            {name:'河池市',value:0},
            {name:'南宁市',value:0},
            {name:'钦州市',value:0},
            {name:'北海市',value:0},
            {name:'防城港市',value:0},
            {name:'崇左市',value:0},
            {name:'百色市',value:0}
	];
        
        config['sichuan'] = [ //四川
            {name:'阿坝藏族羌族自治州',value:0},
            {name:'绵阳市',value:0},
            {name:'广元市',value:0},
            {name:'南充市',value:0},
            {name:'巴中市',value:0},
            {name:'达州市',value:0},
            {name:'广安市',value:0},
            {name:'遂宁市',value:0},
            {name:'德阳市',value:0},
            {name:'成都市',value:0},
            {name:'资阳市',value:0},
            {name:'内江市',value:0},
            {name:'自贡市',value:0},
            {name:'泸州市',value:0},
            {name:'宜宾市',value:0},
            {name:'乐山市',value:0},
            {name:'眉山市',value:0},
            {name:'雅安市',value:0},
            {name:'甘孜藏族自治州',value:0},
            {name:'凉山彝族自治州',value:0},
            {name:'攀枝花市',value:0}
	];
        
        config['guizhou'] = [ //贵州
            {name:'遵义市',value:0},
            {name:'铜仁市',value:0},
            {name:'黔东南苗族侗族自治州',value:0},
            {name:'黔南布依族苗族自治州',value:0},
            {name:'贵阳市',value:0},
            {name:'毕节市',value:0},
            {name:'安顺市',value:0},
            {name:'六盘水市',value:0},
            {name:'黔西南布依族苗族自治州',value:0}
	];
        
        config['yunnan'] = [ //云南
            {name:'迪庆藏族自治州',value:0},
            {name:'丽江市',value:0},
            {name:'昭通市',value:0},
            {name:'曲靖市',value:0},
            {name:'昆明市',value:0},
            {name:'楚雄彝族自治州',value:0},
            {name:'大理白族自治州',value:0},
            {name:'怒江傈僳族自治州',value:0},
            {name:'保山市',value:0},
            {name:'德宏傣族景颇族自治州',value:0},
            {name:'临沧市',value:0},
            {name:'普洱市',value:0},
            {name:'玉溪市',value:0},
            {name:'红河哈尼族彝族自治州',value:0},
            {name:'文山壮族苗族自治州',value:0},
            {name:'西双版纳傣族自治州',value:0}
	];
        
        config['xizang'] = [ //西藏
            {name:'阿里地区',value:0},
            {name:'那曲地区',value:0},
            {name:'日喀则市',value:0},
            {name:'拉萨市',value:0},
            {name:'林芝市',value:0},
            {name:'昌都市',value:0}
	];
        
        config['gansu'] = [ //甘肃
            {name:'酒泉市',value:0},
            {name:'嘉峪关市',value:0},
            {name:'张掖市',value:0},
            {name:'金昌市',value:0},
            {name:'武威市',value:0},
            {name:'兰州市',value:0},
            {name:'白银市',value:0},
            {name:'庆阳市',value:0},
            {name:'平凉市',value:0},
            {name:'天水市',value:0},
            {name:'定西市',value:0},
            {name:'临夏回族自治州',value:0},
            {name:'甘南藏族自治州',value:0},
            {name:'陇南市',value:0}
	];
        
        config['qinghai'] = [ //青海
            {name:'海西蒙古族藏族自治州',value:0},
            {name:'玉树藏族自治州',value:0},
            {name:'果洛藏族自治州',value:0},
            {name:'海南藏族自治州',value:0},
            {name:'海北藏族自治州',value:0},
            {name:'黄南藏族自治州',value:0},
            {name:'西宁市',value:0},
            {name:'海东市',value:0}
	];
        
        config['xinjiang'] = [ //新疆
            {name:'和田地区',value:0},
            {name:'巴音郭楞蒙古自治州',value:0},
            {name:'喀什地区',value:0},
            {name:'克孜勒苏柯尔克孜自治州',value:0},
            {name:'阿克苏地区',value:0},
            {name:'阿拉尔市',value:0},
            {name:'图木舒克市',value:0},
            {name:'吐鲁番市',value:0},
            {name:'伊犁哈萨克自治州',value:0},
            {name:'乌鲁木齐市',value:0},
            {name:'昌吉回族自治州',value:0},
            {name:'塔城地区',value:0},
            {name:'克拉玛依市',value:0},
            {name:'博尔塔拉蒙古自治州',value:0},
            {name:'可克达拉市',value:0},
            {name:'五家渠市',value:0},
            {name:'阿勒泰地区',value:0},
            {name:'北屯市',value:0},
            {name:'石河子市',value:0},
            {name:'铁门关市',value:0},
            {name:'双河市',value:0}
	];
        
        config['hainan'] = [ //海南
            {name:'临高县',value:0},
            {name:'海口市',value:0},
            {name:'澄迈县',value:0},
            {name:'琼海市',value:0},
            {name:'万宁市',value:0},
            {name:'东方市',value:0},
            {name:'琼中黎族苗族自治县',value:0},
            {name:'三亚市',value:0},
            {name:'三沙市',value:0},
            {name:'儋州市',value:0},
            {name:'乐东黎族自治县',value:0},
            {name:'五指山市',value:0},
            {name:'文昌市',value:0},
            {name:'定安县',value:0},
            {name:'昌江黎族自治县',value:0},
            {name:'保亭黎族苗族自治县',value:0},
            {name:'白沙黎族自治县',value:0}
	];
        
        config['nanhaizhudao'] = [ //南海诸岛
            {name:'南海诸岛',value:0}
        ];

	return config[province_pinyin];
}

var nameData={ 
"北京":"BeiJing",
"上海":"ShangHai",
"天津":"TianJin",
"重庆":"ChongQing",
"香港":"XiangGang",
"澳门":"Aomen",
"安徽":"AnHui",
"福建":"FuJian",
"广东":"GuangDong",
"广西":"GuangXi",
"贵州":"GuiZhou",
"甘肃":"GanSu",
"海南":"HaiNan",
"河北":"HeBei",
"河南":"HeNan",
"黑龙江":"HeiLongJiang",
"湖北":"HuBei",
"湖南":"HuNan",
"吉林":"JiLin",
"江苏":"JiangSu",
"江西":"JiangXi",
"辽宁":"LiaoNing",
"内蒙古":"NeiMengGu",
"宁夏":"NingXia",
"青海":"QingHai",
"陕西":"ShanXi",
"山西":"ShanXi",
"山东":"ShanDong",
"四川":"SiChuan",
"台湾":"TaiWan",
"西藏":"XiZang",
"新疆":"XinJiang",
"云南":"YunNan",
"浙江":"ZheJiang",
"北京":"BeiJing",
"上海":"ShangHai",
"天津":"TianJin",
"重庆":"ChongQing",
"香港":"XiangGang",
"澳门":"AoMen",
}

for (var i in nameData){
	nameData[i]=nameData[i].toLowerCase()
}
