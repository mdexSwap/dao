(this.webpackJsonpreact_imo=this.webpackJsonpreact_imo||[]).push([[2],{11:function(e,t,o){"use strict";o.d(t,"d",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return n});var n="https://gateway.mdex.one/v2/",a="https://api.mdex.one/v2",i={en:{name:"English",sign:"EN"},"zh-CN":{name:"简体中文",sign:"CN"}},r={"0x38":"BSC","0x80":"HECO"}},32:function(e,t,o){"use strict";o.d(t,"c",function(){return c}),o.d(t,"b",function(){return i}),o.d(t,"e",function(){return r}),o.d(t,"a",function(){return n}),o.d(t,"d",function(){return a}),o(2);var n=function(e,t){var o=new Date(+e),n=o.getFullYear(),a=(a=o.getMonth()+1)<10?"0"+a:a,i=(i=o.getDate())<10?"0"+i:i,r=(r=o.getHours())<10?"0"+r:r,e=(e=o.getMinutes())<10?"0"+e:e,o=(o=o.getSeconds())<10?"0"+o:o;return 1===t?n+"-"+a+"-"+i+" "+r+":"+e+":"+o:2===t?n+"-"+a+"-"+i+" "+r+":"+e:3===t?a+"-"+i+" "+r+":"+e+":"+o:4===t?n+"-"+a+"-"+i+" "+r+":"+e+":"+o:5===t?a+"月"+i+"日":6===t?n+"/"+a+"/"+i:7===t?n+"/"+a+"/"+i+" "+r+":"+e+":"+o:8===t?a+"/"+i+" "+r+":"+e:9===t?r+":"+e+" "+a+"/"+n:10===t?n+"-"+a+"-"+i:11===t?a+"-"+i:12===t?a+"/"+i+" "+r+":"+e:13===t?a+"-"+i+" "+r+":"+e:14===t?r+":"+e+":"+o+" "+i+"/"+a+"/"+n:15===t?n+"."+((a=+a+1)<10?"0"+a:a):16===t?a+"/"+i+" "+r+":"+e+":"+o:r+":"+e+":"+o},a=function(e,t){t=0===t?0:t||2;if(0<=Number(e)){var o=null==e?void 0:e.toString(),n="",a=0;if(o&&-1===(null===o||void 0===o?void 0:o.indexOf("."))){for(var i=o.length-1;0<=i;i--)n=a%3==0&&0!==a?o.charAt(i)+","+n:o.charAt(i)+n,a++;return n}for(var e=0,e=0..toFixed(t).split(".")[1],r=(null===o||void 0===o?void 0:o.indexOf("."))-1;0<=r;r--){n=a%3==0&&0!==a?o.charAt(r)+","+n:o.charAt(r)+n;a++}return o=n+(o+e).substr((o+e).indexOf("."),t+1),o=0===t?o.split(".")[0]:o}},i=function(e){var t={},o=e.indexOf("?");if(-1!==o)for(var n=e.substr(o+1).split("&"),a=0;a<n.length;a++)t[n[a].split("=")[0]]=n[a].split("=")[1];return t},r=function(e,t){return e?e.substring(0,t)+"..."+e.substring(e.length-t):""},c=function(e,t,o){o=o||"tx";return"https://".concat("HECO"===t?"hecoinfo":"bscscan",".com/").concat(o,"/").concat(e)}},47:function(e,t,o){e.exports={start:"Loading_start__2D2e4",align:"Loading_align__32iOI",align_center:"Loading_align_center__34PcG",align_between:"Loading_align_between__2w_qH",align_around:"Loading_align_around__mnnG4",horizontal_between:"Loading_horizontal_between__1hLHD",ellipsis:"Loading_ellipsis__1kUna",clamp:"Loading_clamp__uMp7W",loader:"Loading_loader__DrlEE",rotate:"Loading_rotate__1wGst"}},62:function(e,t,o){},89:function(e,t){},91:function(e,t,o){"use strict";o.r(t);function i(){return Object(m.jsx)("div",{className:g.a.loader,children:Object(m.jsx)("img",{src:"data:image/png;base64,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",alt:""})})}var n=o(0),r=o(5),c=o(10),s=o(15),u=o(14),l=o(17),a=o(18),d=o.n(a),p=o(33),h=o(47),g=o.n(h),m=o(4);function f(a){return function(e){Object(s.a)(n,e);var t,o=Object(u.a)(n);function n(e){return Object(r.a)(this,n),(e=o.call(this,e)).state={component:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:(t=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:t=e.sent,t=t.default,this.setState({component:t});case 5:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?Object(m.jsx)(e,Object(l.a)({},this.props)):Object(m.jsx)(i,{})}}]),n}(n.Component)}var T=o(20),v=o(2),D=f(function(){return Promise.all([o.e(0),o.e(8),o.e(1),o.e(7)]).then(o.bind(null,408))}),b=f(function(){return Promise.all([o.e(0),o.e(4),o.e(1),o.e(6)]).then(o.bind(null,407))}),x=function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(m.jsx)(T.a,{children:Object(m.jsxs)(v.c,{children:[Object(m.jsx)(v.a,{exact:!0,path:"/",component:D}),Object(m.jsx)(v.a,{exact:!0,path:"/campaign",component:b})]})})}}]),o}(n.Component),y=o(16),E=o.n(y),t=o(29),A=(o(62),o(37)),a=o(28),S=o.n(a),h=o(50),U=o.n(h);S.a.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e.response)});function k(e,t,o){var n={withCredentials:!1,url:t,timeout:2e4,headers:{}},a=Object(l.a)({},o);return"get"===e?(n.method="get",n.params=a):"delete"===e?(n.method="delete",n.url=t+o):"postForm"===e?(n.method="post",n.headers={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},n.data=U.a.stringify(a)):"postJson"===e&&(n.method="post",n.headers={"Content-Type":"application/json; charset=UTF-8"},n.data=a),S()(n)}var C=new function e(){Object(r.a)(this,e),this.get=function(e){return k("get",e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{})},this.delete=function(e){return k("delete",e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{})},this.postForm=function(e){return k("postForm",e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{})},this.postJson=function(e){return k("postJson",e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{})},this.post=this.postJson},O=o(1),M=o(11),j="".concat(M.a,"/mdex/charts"),I="".concat(M.c,"/dao/charts"),F="".concat(M.c,"/dao/list"),G="".concat(M.c,"/dao/info"),w="".concat(M.c,"/dao/vote"),y=(Object(c.a)(J,[{key:"getDaoChartsData",value:function(e){return C.get(I,e)}},{key:"getDaoListData",value:function(e){return C.get(F,e)}},{key:"saveDaoChartsData",value:function(e){this.daoChartsData=e}},{key:"saveDaoListData",value:function(e,t){var o=e.slice(0);this.filterParam=Object.assign(this.filterParam,t);var n=this.filterParam,t=n.sortStatus,n=n.weekStatus,o=t?e.sort(function(e,t){e=e.avg_votes;return(t=t.avg_votes)<e?-1:e<t?1:0}):e.sort(function(e,t){e=e.avg_votes;return(t=t.avg_votes)<e?1:e<t?-1:0});if(n){var a,i=[],r=Object(A.a)(o);try{for(r.s();!(a=r.n()).done;){var c=a.value;3===c.status&&i.push(c)}}catch(e){r.e(e)}finally{r.f()}o=i}this.daoListData=e,this.cloneDaoListData=o}},{key:"saveCloneDaoListData",value:function(e){this.cloneDaoListData=e}},{key:"saveSingleDaoListData",value:function(e){this.daoListData=e}}]),new J),a=o(32),V={Header:{SetLang:"Language"},Footer:{Application:"Application",ACText1:"Listing Token",ACText2:"Liquidity Mining Whitelist",ACText3:"IMO Application",ACText4:"MDEX Ecological Fund Application",Guide:"Guide",GUText1:"Swap",GUText2:"Pool",GUText3:"Info",GUText4:"Liquidity",GUText5:"Boardroom",GUText6:"Trading",Doc:"Doc",DOText1:"FAQ",Guidance:"User Guide",About:"About",ABText1:"Announcement",ABText2:"Adjustment of Pool",ABText3:"Ecological Fund",Vulnerability:"Bug Bounty Campaign",ContactUS2:"Contact us",Reserved:"@2021 Mdex.com.All rights reserved"},Nav:{Home:"Home",Campaign:"Director Election",Referendum:"Proposal Referendum",Motion:"Community Proposal",Mine:"Mine"},Com:{The:"Coming Soon",Expect:"Stay tuned",Max:"Max",Confirm:"Confirm",Know:"I know",Success:"Success",Error:"Error",Connect:"Connect",Nodata:"No Data",Approve:"Approve",Approving:"Approving",Inus:"Stake",ViewOn:"View transactions",Redemption:"Redeem",Extract:"Withdraw",Back:"Returned"},Home:{Vote_title:"Vote Guide",Realize_title:"Learn More",Tool_title:"Governance Rights",Audit_title:"Audit Agency",Partner_title:"Partner",Banner:{Title:"MDEX Decentralized Governance",Open:"Coming Soon"},Tab:{First:"Node Election",FirstIntroduce:"MDEX community voted to elect 9 director every month ",Second:"Community Proposal",SecondIntroduce:"Users who hold MDX lock-up voucher can submit proposals",Third:"Select proposal",ThirdIntroduce:"Proposals supported by 5+ director enter public vote",Fourth:"Community Public Voting",FourthIntroduce:"The proposal with the most votes will be passed"},Vote:{PCTerminal:"Obtain Voting Voucher",MobileTerminal:"Go vote",Strategy:"Voting FAQ",PCIntroduce:"Boardroom lock-up MDX to obtain voting voucher",MobileIntroduce:"Vote for your supported director, community proposals ",StrategyIntroduce:"Understand common voting questions"},Realize:{Rule:"Voting Voucher Usage Guide",Guide:"director voting guide",Earn:"Community proposal voting guide",RuleIntroduce:"Understand the rules of using MDEX Voting Voucher",GuideIntroduce:"Understand the MDEX director election and voting rules",EarnIntroduce:"Learn how to submit community proposals and vote for proposals you support"},Tool:{HECOIntroduce:"HECO Ecological Strongest DEX Governance Right",BSCIntroduce:"BSC Ecological Top2 DEX Governance Right",DaoIntroduce:"Support more networks is determined by DAO"}},Campaign:{Banner:{Title:"MDEX DAO Governance",Desc:"DAO is an important step towards MDEX decentralization. Come now to give your suggestions for MDEX future ecological development! "},List:{Statistics:{NodeNum:"Number of candidate directors ",NodeTotal:"Total number of directors pledged",Candidate:"Become a Candidate Director",UserTotal:"Total number of user pledged"},Th:{ToVote:"Directors Vote",Next:"Campaign for the next cycle：",Issue:"See only current directors",Rule:"Campaign Rules",NodeName:"The name of director",OftenVote:"Real-time vote count",AverageVote:"the average of 30 days of votes",Proportion:"Proportion",Tips:"Daily random snapshot of the number of votes received by directors, and take the average of 30 days of votes",Node:"Director",Operate:"Operation"},Td:{Name:"The name of Director",Votes:"Real-time vote count",Average:"the average of 30 days of votes",Accounted:"proportion",Official:"Official",Vote:"Vote",ElectorInfo:"Candidate Information：",Explain:"Campaign Instructions：",Address:"Candidate s Address",Voucher:"Pledged amount"}}},Mine:{Statistics:{MyPledge:"The amount of my pledged",Redemption:"xMDX in redemption ",Extract:"To extract",MyPledgeTips:"Total amount of xMDX staked to directors",RedemptionTips:"All xMDX redeemed and waiting to be unlocked",ExtractTips:"All xMDX quantities that can be withdrawn"},Tab:{User:"The director I voted",Director:"I am the director",Progress:"In progress",Expired:"Expired"},Mark:{Candidate:"Candidate Director",Formal:"Official Director",Fail:"Invalid director",Waiting:"Waiting",Refuse:"Application invalid"},Con:{VoteAmount:"Director vote amount",JoinNum:"Voted users",Voted:"Voted",Tips:"You have withdrawn from the director election. Please get your voting voucher in time",Pledge:"Pledged",MyVote:"My vote",Prompt5:"Your application for director failed, and your voting voucher has been returned automatically"}},Pop:{PledgeAccount:"Pledged amount",Balance:"Balance",ErrorTips:"Insufficient xmdx balance",Apply:{Title:"Become a candidate director",Tips1:function(e,t){return"You need to pledge at least ".concat(e," ").concat(t," voucher to become a candidate director of MDEX")},Tips2:"* If you are not selected as a regular director, you can retrieve the voucher at any time, but there is a three-day unlocking period；",Tips3:"If you are elected as a official director,you can’t withdraw until expiration of director term.",InputTips1:function(e,t){return"Mininum to stake ".concat(e," ").concat(t)},NodeName:"*The name of the director",Caption:"*Campaign Slogan(English is recommended)",InputTips2:"A good campaign slogan will bring you more votes",InputTips3:"You will run for MDEX Director under this name",NameError:"The name already exists",Required:"Required",Rule:"View Rules"},Vote:{Title:"Vote",Tips:"One xmdx represents one vote, please enter an integer multiple of 1; You can redeem your voucher at any time. There is a three-day unlocking period for redeeming your voting voucher；",InputTips1:"Please enter the number of votes,must be an integer"},Status:{SucTitle:"Submit successfully",FaiTitle:"Submit failed",SucTips:"Your application has been submitted successfully,when your application is confirmed,you will become a candidate director",FaiTips:"Not meet requirement,please confirm the num of LP"},Extract:{Title:"Withdraw",Tips:"Withdrawals will have a lock period,  you can withdraw after expiration"}}},R={Header:{SetLang:"语言设置"},Footer:{Application:"申请",ACText1:"上币申请",ACText2:"申请流动性激励",ACText3:"IMO申请",ACText4:"MDEX生态基金申请",Guide:"网站导航",GUText1:"兑换",GUText2:"流动性池",GUText3:"info",GUText4:"流动性挖矿",GUText5:"董事会",GUText6:"交易挖矿",Doc:"文档",DOText1:"FAQ",Guidance:"用户使用指南",About:"关于",ABText1:"公告",ABText2:"矿池调整",ABText3:"生态基金",Vulnerability:"漏洞赏金计划",ContactUS2:"联系我们",Reserved:"@2021 Mdex.com.All rights reserved"},Nav:{Home:"首页",Campaign:"董事竞选",Referendum:"提案公投",Motion:"社区提案",Mine:"我的"},Com:{The:"即将开始",Expect:"敬请期待",Max:"最大",Confirm:"确认",Know:"我知道了",Success:"成功",Error:"失败",Connect:"链接钱包",Nodata:"暂无数据",Approve:"授权",Approving:"授权中",Inus:"质押",ViewOn:"查看交易记录",Redemption:"赎回",Extract:"提取",Back:"已退回"},Home:{Vote_title:"投票攻略",Realize_title:"了解更多",Tool_title:"平台治理权",Audit_title:"审计机构",Partner_title:"合作伙伴",Banner:{Title:"MDEX 去中心化治理",Open:"即将开启"},Tab:{First:"董事竞选",FirstIntroduce:"每月社区投票选出9名董事",Second:"社区提案",SecondIntroduce:"持有MDX锁仓凭证用户均可提交提案",Third:"选取提案",ThirdIntroduce:"获得超过5位董事支持的提案进入社区公投",Fourth:"社区公投",FourthIntroduce:"提案获得票数最多的方案将获得通过"},Vote:{PCTerminal:"获取投票凭证",MobileTerminal:"去投票",Strategy:"投票攻略FAQ",PCIntroduce:"董事会锁仓MDX获取投票凭证",MobileIntroduce:"为您支持的董事，社区提案进行投票",StrategyIntroduce:"了解常见投票问题与解答"},Realize:{Rule:"投票凭证使用指南",Guide:"董事投票指南",Earn:"社区提案 投票指南",RuleIntroduce:"了解MDEX投票凭证使用规则",GuideIntroduce:"了解MDEX董事竞选，投票规则",EarnIntroduce:"了解如何提交社区提案，如何为您支持的提案"},Tool:{HECOIntroduce:"HECO生态最强DEX治理权",BSCIntroduce:"BSC生态Top2 DEX治理权",DaoIntroduce:"支持更多网络由DAO决定"}},Campaign:{Banner:{Title:"MDEX DAO治理",Desc:"DAO 是MDEX去中心化的重要一步，快来为MDEX未来生态发展建言献策"},List:{Statistics:{NodeNum:"候选董事数",NodeTotal:"董事质押凭证总数",Candidate:"成为候选董事",UserTotal:" 总参与人数"},Th:{ToVote:"董事投票",Next:"竞选下一周期：",Issue:"只看本周期董事",Rule:"竞选规则",NodeName:"董事名称",OftenVote:"实时票数",AverageVote:"30日平均票数",Proportion:"占比",Tips:"每日随机快照董事得票数，并取30天得票平均值",Node:"董事",Operate:"操作"},Td:{Name:"董事名称",Votes:"实时票数",Average:"30日平均票数",Accounted:"占比",Official:"正式",Vote:"投票",ElectorInfo:"竞选人信息：",Explain:"竞选说明：",Address:"竞选人地址",Voucher:"质押凭证数"}}},Mine:{Statistics:{MyPledge:"我质押的xMDX数量",Redemption:"赎回中xMDX",Extract:"待提取凭证",MyPledgeTips:"所有质押给董事的xMDX总数量",RedemptionTips:"所有已赎回，待解锁状态的xMDX 数量",ExtractTips:"所有已解锁，可提取的xMDX 数量"},Tab:{User:"我投票的董事",Director:"我是董事",Progress:"进行中",Expired:"已失效"},Mark:{Candidate:"候选董事",Formal:"正式董事",Fail:"失效董事",Waiting:"等待中",Refuse:"申请无效"},Con:{VoteAmount:"董事得票数",JoinNum:"投票人数",Voted:"已投票",Tips:"已退出董事竞选，请及时提取您的投票凭证",Pledge:"已质押",MyVote:"我的票数",Prompt5:"董事申请未通过，您的投票凭证已自动退回"}},Pop:{PledgeAccount:"质押数量",Balance:"余额",ErrorTips:"xMDX余额不足",Apply:{Title:"成为候选董事",Tips1:function(e,t){return"你至少需要质押 ".concat(e,"个 ").concat(t," 凭证，才可成为MDEX候选董事")},Tips2:"* 如果你未被选中为董事，可以随时取回凭证，但是有三天解锁期；",Tips3:"* 如果你被选中为董事，那么你将不能赎回质押的凭证直到正式董事期结束。",InputTips1:function(e,t){return"最低质押数量".concat(e," ").concat(t)},NodeName:"*董事名称",Caption:"*竞选说明（推荐使用英语）",InputTips2:"一个好的竞选说明，将为你带来更多支持选票",InputTips3:"你将以此名称来竞选MDEX董事",NameError:"该名称已存在",Required:"不能为空",Rule:"查看规则"},Vote:{Title:"投票",Tips:"1个xMDX代表1票，请输入1的整数倍；你可以随时赎回你的凭证，赎回投票凭证有三天解锁期；",InputTips1:"请输入投票数量，只能输入整数"},Status:{SucTitle:"申请提交成功",FaiTitle:"申请提交失败",SucTips:"您的申请提交成功，待申请信息确认后，您将自动成为MDEX 候选董事",FaiTips:"暂不符合申请条件，请确认自己质押凭证数量"},Extract:{Title:"赎回凭证",Tips:"赎回质押凭证，将有一个锁定期，到期后可以提取凭证"}}},L="en",h=Object(a.b)(window.location.href),a=window.localStorage.getItem("DaoLang");function J(){Object(r.a)(this,J),this.daoChartsData={dao_counts:0,dao_vote_users:0,dao_lp_counts:0},this.filterParam={sortStatus:!0,weekStatus:!1},this.daoListData=[],this.cloneDaoListData=[],Object(O.l)(this)}Object.keys(h).length?(h=h.lang,Object.keys(M.b).includes(h)&&(L!==h&&(L=h),a!==h&&window.localStorage.setItem("DaoLang",h))):a&&(L=a);var Y,y={config:(Object(c.a)(X,[{key:"langTextList",get:function(){return{"zh-CN":R,en:V}[this.lang]}},{key:"saveAccount",value:function(e){this.account=e}},{key:"saveChain",value:function(e){this.chainId=e,this.chainName=M.d[e]}},{key:"saveLang",value:function(e){this.lang!==e&&(this.lang=e,window.localStorage.setItem("DaoLang",e))}},{key:"setH5FootSatus",value:function(e){this.h5FootSatus=e}}]),new X),home:(Object(c.a)(B,[{key:"getHomeData",value:function(e){return C.get(j,e)}},{key:"saveHomeData",value:function(e){this.homeData=e}}]),new B),campaign:y,mine:(Object(c.a)(z,[{key:"getDaoVoteData",value:function(e){return C.get(w,e)}},{key:"getDaoInfoData",value:function(e){return C.get(G,e)}},{key:"saveDaoVoteData",value:function(e){this.daoVoteData=e}},{key:"saveDaoInfoData",value:function(e){this.daoInfoData=e}},{key:"saveTabList",value:function(e){this.tabList=Object.assign(this.tabList,e)}}]),new z)};function z(){Object(r.a)(this,z),this.daoVoteData=[],this.daoInfoData=[],this.tabList={1:0,2:0},Object(O.l)(this)}function B(){Object(r.a)(this,B),this.homeData={bsc_total_tvl:0,heco_total_tvl:0},Object(O.l)(this)}function X(){Object(r.a)(this,X),this.lang=L,this.isPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),this.isMobile=!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),this.account="",this.chainId="0x80",this.chainName="HECO",this.h5FootSatus=!0,Object(O.l)(this)}E.a.render(Object(m.jsx)(t.a,{store:y,children:Object(m.jsx)(x,{})}),document.getElementById("root")),Y&&Y instanceof Function&&o.e(9).then(o.bind(null,406)).then(function(e){var t=e.getCLS,o=e.getFID,n=e.getFCP,a=e.getLCP,e=e.getTTFB;t(Y),o(Y),n(Y),a(Y),e(Y)})}},[[91,3,5]]]);