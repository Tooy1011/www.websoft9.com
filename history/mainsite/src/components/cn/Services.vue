<template>
    <div>

        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>服务市场</h2>
                        <div class="bar"></div>
					    <p>针对用户、开发者（软件提供商）和合作伙伴我们提供独特的价值</p>
                    </div>
                </div>
			</div>
			
        </div>
        <!-- End Page Title -->
        <div style="width:80%;margin-left:20%;">
            <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <select class="form-control" ref="servicePrice" @change="getValue">
                        <option value="0" >请选择价格</option>
                        <option value="1">300以下</option>
                        <option value="2">300~500</option>
                        <option value="3">500~1000</option>
                        <option value="4">1000~3000</option>
                        <option value="5">3000以上</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <select class="form-control" ref="serviceType"  @change="getValue">
                        <option value="0">请选择服务类型</option>
                        <option value="1">安装</option>
                        <option value="2">咨询</option>
                        <option value="3">故障处理</option>
                        <option value="4">技术配置</option>
                        <option value="5">项目实施</option>
                        <option value="6">运维外包</option>
                        <option value="7">开发</option>
                        <option value="8">商务合作</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <select class="form-control" ref="serviceUser" @change="getValue">
                        <option value="0">请选择服务对象</option>
                        <option value="1">软件供应商</option>
                        <option value="2">客户</option>
                    </select>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <svg t="1605947826409" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="728" width="30" height="30">
                        <path d="M-203.27077415 920.63422545l560.37587956 325.68469528c11.90509161 6.94999942 31.01759003 6.94999942 42.8905057 0.12870369l851.50363325-491.6802834c11.90509161-6.82129575 11.90509161-17.92198926 0-24.87198869L691.09118887 404.24283299c-11.74421199-6.82129575-30.88888633-6.82129575-42.79397794 0L-203.14207046 895.79441268c-11.90509161 6.94999942-12.00161936 18.01851702-0.12870369 24.87198871z" fill="#AABAFD" p-id="729"></path>
                        <path d="M458.9097266 953.77542641c-6.69259203 3.86111079-6.62824019 10.13541583 0 14.02870255l138.1634145 80.24675261c6.66041612 3.86111079 17.50370224 3.92546265 24.22847022 0.06435186l272.20831081-157.17938514c6.69259203-3.86111079 6.66041612-10.16759175 0-14.02870255l-138.13123858-80.27892856a26.73819223 26.73819223 0 0 0-24.22847022-0.03217592l-272.20831079 157.14720921z" fill="#2E4277" p-id="730"></path>
                        <path d="M-212.08697713 908.34302276l0.09652778 32.78726581c0 4.40810149 2.99236086 8.91273074 8.81620296 12.3233786L357.20163316 1279.0740106c11.90509161 6.82129575 31.01759003 6.82129575 42.89050573 0l851.50363324-491.58375561c5.95254581-3.37847194 8.91273074-7.91527713 8.91273074-12.54861007l-0.09652776-32.65856213c0 4.50462927-2.96018496 9.00925852-8.91273075 12.45208232L400.02778705 1246.4154485c-11.90509161 6.85347164-31.01759003 6.85347164-42.89050572-0.09652777L-203.27077415 920.66640139c-5.92036987-3.41064786-8.78402706-7.81874934-8.78402706-12.32337863z" fill="#798FFE" p-id="731"></path>
                        <path d="M646.65623886-244.19854854c11.90509161-6.85347164 21.52569265-1.35138878 21.55786857 12.25902677l1.5122684 599.08351524c0.06435185 13.54606368-9.52407328 30.24536786-21.39698896 37.09883952L-190.91521962 888.71570958c-11.87291569 6.85347164-21.52569265 1.28703693-21.55786858-12.2912027l-1.51226841-599.05133932c-0.03217594-13.64259146 9.55624922-30.24536786 21.42916491-37.09883952L646.65623886-244.19854854z" fill="#1B2A4F" p-id="732"></path>
                        <path d="M-236.50850287 264.30974271l1.54444431 599.05133934c0 6.69259203 2.41319424 11.55115646 6.24212912 13.73911922l22.52314628 13.09560077c-3.86111079-2.18796278-6.27430503-7.0465272-6.27430504-13.73911923l-1.54444432-599.05133933c0-13.64259146 9.58842514-30.24536786 21.46134082-37.16319136L646.65623886-244.19854854c5.95254581-3.41064786 11.35810092-3.7324071 15.31573948-1.54444432l-22.5231463-13.09560078c-3.86111079-2.18796278-9.33101775-1.86620353-15.28356354 1.54444432L-215.07933798 227.27525503c-11.87291569 6.78911981-21.42916491 23.39189621-21.42916489 37.03448768z" fill="#384E85" p-id="733"></path>
                        <path d="M-183.7078128 270.03705705l1.48009245 578.78050766L639.41665612 374.44792805l-1.44791655-578.74833175z" fill="#384E85" p-id="734"></path>
                        <path d="M-183.7078128 270.03705705l0.25740738 97.10693642L638.22614697-107.22564321l-0.22523146-97.07476049z" fill="#AABAFD" p-id="735"></path>
                        <path d="M502.50810265-89.43235765c7.91527713-4.60115702 14.35046178-1.06180547 14.38263769 8.04398081a31.50022887 31.50022887 0 0 1-14.28610993 24.743285c-7.78657342 4.50462927-14.22175808 0.83657399-14.25393402-8.26921229 0-9.10578627 6.3708328-20.0456002 14.15740626-24.51805352zM548.26226553-115.84879065c7.78657342-4.50462927 14.22175808-0.99745361 14.25393399 8.10833267a31.46805296 31.46805296 0 0 1-14.15740621 24.67893315c-7.91527713 4.56898111-14.35046178 0.90092586-14.38263772-8.20486045-0.03217594-9.10578627 6.3708328-20.01342428 14.28610994-24.58240537zM593.88772469-142.20087181c7.91527713-4.56898111 14.35046178-1.06180547 14.38263771 8.04398083a31.50022887 31.50022887 0 0 1-14.28610993 24.77546091c-7.94745303 4.56898111-14.38263771 0.86874993-14.3826377-8.20486043-0.03217594-9.10578627 6.3708328-20.0456002 14.28610992-24.61458131z" fill="#FFFFFF" p-id="736"></path>
                        <path d="M-31.45134391 880.4464973l-53.76596779 31.27499741-23.16666475-13.38518409 53.76596778-31.24282148zM547.32916375 544.11157141l-53.86249555 31.30717335-23.16666474-13.38518409 53.86249554-31.27499741zM691.99211474 460.03588394l-53.86249555 31.30717333-23.16666475-13.3851841 53.86249555-31.30717332zM595.46434494 655.76202514l-53.79814369 31.27499741-47.81342196-27.60694217 53.7981437-31.27499739zM860.78700818 641.34721151l-53.89467148 31.27499742-47.87777381-27.671294 53.86249554-31.27499742zM933.15065959 599.26110389l-53.86249555 31.30717333-108.20762992-62.48564297 53.86249553-31.30717333z" fill="#384E85" p-id="737"></path>
                        <path d="M752.32197086 494.8502329l-99.32707513 57.72360633-47.90994975-27.67129399 99.32707514-57.69143041zM634.55809171 563.2884217l-53.86249554 31.30717332-47.90994974-27.67129402 53.86249554-31.30717331zM812.52312327 529.63240596l-126.22614694 73.36110505-47.81342199-27.60694218 126.22614696-73.36110504zM667.8601723 613.70809344l-53.86249555 31.30717334-47.8455979-27.60694217 53.86249554-31.30717334zM728.15785248 648.52244239l-53.86249555 31.30717336-47.90994973-27.67129402 53.86249555-31.27499742z" fill="#384E85" p-id="738"></path>
                        <path d="M562.1944403 605.34235339l-53.89467147 31.30717334-47.87777382-27.67129402 53.86249554-31.27499741zM474.93333641 586.19767906l-53.7981437 31.24282147-23.16666474-13.38518408 53.79814369-31.24282147zM402.60186091 628.21943483l-53.83031961 31.27499742-23.16666478-13.35300815 53.86249555-31.30717335zM438.76759865 816.70599331l-53.86249554 31.30717334-47.87777384-27.67129401 53.86249555-31.30717335z" fill="#384E85" p-id="739"></path>
                        <path d="M330.23820948 670.27336654l-53.76596778 31.24282147-23.16666474-13.35300814 53.76596778-31.27499742zM417.46713746 689.4502168l-53.76596777 31.24282148-47.90994976-27.671294 53.79814371-31.24282147zM257.9389099 712.29512231l-53.86249554 31.30717333-23.16666475-13.38518407 53.86249554-31.30717334zM345.16783788 731.43979666l-53.86249555 31.30717332-47.90994974-27.67129399 53.86249554-31.27499741zM450.76921804 739.86988855l-53.76596779 31.24282149-47.8455979-27.60694216 53.79814371-31.27499741zM185.63961034 754.28470218l-53.86249556 31.33934924-23.16666473-13.38518407 53.86249555-31.30717332zM272.8685383 773.46155244l-53.86249553 31.30717334-47.90994976-27.67129403 53.86249554-31.27499741zM511.09907414 774.68423753l-53.79814369 31.24282148-47.90994974-27.67129401 53.7981437-31.21064557zM378.46991845 781.89164434l-53.86249553 31.2749974-47.81342198-27.60694216 53.86249555-31.30717332zM113.243783 796.3708098l-53.86249555 31.30717334-23.16666475-13.38518409 53.86249554-31.30717332zM200.47271097 815.54766009l-53.86249554 31.30717331-47.87777383-27.67129402 53.86249555-31.30717332zM306.17061889 823.91340013l-53.86249555 31.27499741-47.84559789-27.60694218 53.86249554-31.30717332zM128.17341139 857.56941585l-53.86249554 31.30717333-47.90994974-27.67129401 53.86249554-31.30717332zM366.46829908 858.7277491l-53.86249555 31.27499742-47.90994974-27.6391181 53.86249554-31.30717335zM233.77479154 865.9351559l-53.86249554 31.33934926-47.81342198-27.60694216 53.86249555-31.30717334zM294.07247172 900.7816808l-53.86249554 31.30717333-47.8777738-27.67129401 53.86249554-31.30717333zM574.48564297 807.69673479l-273.94581067 159.20646831-47.90994973-27.67129401 273.94581067-159.2064683zM221.77317216 942.80343658l-53.86249553 31.30717333-47.87777384-27.67129401 53.83031963-31.30717332zM161.47549197 907.98908759l-126.16179513 73.32892912-47.84559789-27.63911806 126.19397103-73.29675319zM149.37734481 984.85736828l-53.76596778 31.27499742-47.90994972-27.67129401 53.7981437-31.24282149zM282.07085234 977.61778554l-126.12961919 73.32892913-47.94212566-27.67129401 126.19397106-73.32892911z" fill="#384E85" p-id="740"></path>
                        <path d="M40.94448342 838.39256559l-53.86249554 31.30717334-23.16666475-13.38518408 53.86249555-31.30717335zM619.62846331 502.08981562l-53.86249554 31.30717335-23.16666474-13.38518407 53.86249554-31.27499742zM489.8629648 647.36410916l-53.86249554 31.30717336-47.90994974-27.67129401 53.86249554-31.27499742zM643.76040577 767.44465479l-53.86249554 31.27499742-47.87777382-27.671294 53.86249554-31.27499742zM583.46272557 732.59812989l-53.86249554 31.30717333-47.90994974-27.67129398 53.86249555-31.27499742zM523.16504539 697.78378094l-53.86249556 31.30717331-47.81342197-27.60694214 53.83031962-31.30717335zM788.45553268 683.33679138l-53.86249554 31.30717332-47.90994975-27.67129397 53.86249555-31.27499742zM716.09188127 725.42289902l-53.7981437 31.24282147-47.90994973-27.671294 53.79814368-31.24282149zM55.80975996 899.62334756l-80.76156739 46.91249612-47.87777382-27.67129401 80.72939149-46.8803202z" fill="#384E85" p-id="741"></path>
                        <path d="M-107.32217098 423.03357217c10.45717506-6.01689765 16.60277642-4.6976848 21.01087789-0.70787031l-5.92036988 9.58842513c-3.79675894-3.79675894-8.65532335-3.50717564-14.57569324-0.06435184-12.09814715 6.98217536-19.75601689 22.1370352-19.72384095 36.74490437 0.06435185 14.54351732 7.78657342 20.94652605 19.85254467 13.96435071 5.95254581-3.41064786 10.7789343-8.88055483 14.54351728-16.95671158l5.95254581 2.83148125c-4.37592557 9.10578627-10.48935099 17.50370224-20.91435011 23.5205999-17.05323932 9.84583251-28.57221985 1.41574063-28.6365717-18.05069295-0.03217594-19.46643358 11.39027683-41.02430215 28.41134023-50.87013468zM-68.9041186 454.63032881c3.53935156-2.02708316 6.53171242-0.32175923 6.53171243 3.73240712a14.47916546 14.47916546 0 0 1-6.4995365 11.22939721c-3.53935156 2.05925909-6.4995365 0.35393517-6.49953652-3.73240711a14.47916546 14.47916546 0 0 1 6.46736059-11.22939722z" fill="#D9DDF6" p-id="742"></path>
                        <path d="M-73.64032653 416.99779788a5.30902734 9.17013812 30.162 1 0 9.21500847-15.85715279 5.30902734 9.17013812 30.162 1 0-9.21500847 15.85715279Z" fill="#D9DDF6" p-id="743"></path>
                        <path d="M-49.14810171 363.31505861l28.31481246 79.92499339-6.98217536 4.0219904-28.31481245-79.92499341zM6.00143075 322.2585805l49.42221815 28.21828472-49.10045892 85.07314111-7.91527713-4.50462926 41.31388549-71.52707742-41.57129286-23.61712767zM110.60535728 350.573393l0.06435186 21.23610934-51.67453277 29.8592568-0.06435186-21.23610937z" fill="#D9DDF6" p-id="744"></path>
                    </svg>
                </div>
            </div> -->
        </div>

        <!-- Start ML Services Area -->
		<section class="ml-services-area ptb-80">
			<div class="container">
                <div class="section-title">
					<h2>面向用户</h2>
					<div class="bar"></div>
					<p>从个人用户、初创企业到中大型企业，我们都提供合适的服务方案</p>
				</div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-6" v-for="edge in webData.edges" :key="edge.node.id">
                        <div class="single-ml-services-box">
                            <div class="image">
                                <img src="../../assets/img/services-image/1.png" alt="image">
                            </div>
                            <h3><G-link to="/cn/Servicedetail:" class="nav-link">{{ edge.node.name }}</G-link></h3>                      
                            <p>{{ edge.node.brief }}</p>
                        </div>
                    </div>
                </div>
			</div>
		</section>

        <!-- End ML Services Area -->
    </div>
</template>


<script>


export default {
    
    name: 'Services',
    data () {  
        return {
            returnData: [],
            webData: [],
            // temList: [],
        }
    },
    async created () {
       // GraphQL持久化保存的数据
       this.returnData = this.$static.Websoft9service
       // 页面展示的数据，初期化的时候是全部查询
       this.webData = JSON.parse(JSON.stringify(this.returnData))
       this.temList = []
    },
    
    methods: {

        getValue: function(){
            
            var obj=JSON.parse(JSON.stringify(this.returnData));
            console.info("GraphQL持久化保存的数据"+obj);
            // 情况上次返回的数据
            this.temList = [];

            var serviceTypeList = ['请选择服务类型','安装','咨询','故障处理','技术配置','项目实施','运维外包','开发','商务合作'];
            var serviceUserList = ['请选择服务对象','软件供应商','客户'];
            var typeIndex = this.$refs.serviceType.value;
            var userIndex = this.$refs.serviceUser.value;

            // 根据价格查询
            for(const item of obj.edges){

                // this.temList.push(item);
                if (this.$refs.servicePrice.value == 0){
                    if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                        this.temList.push(item);
                    }
                    
                }else if (this.$refs.servicePrice.value == 1){
                    if (item.node.pricing <=  300){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 2){
                    if (item.node.pricing >  300 && item.node.pricing <= 500){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 3){
                    if (item.node.pricing >  500 && item.node.pricing <= 1000){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 4){
                    if (item.node.pricing >  1000 && item.node.pricing <= 3000){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 5){
                    if (item.node.pricing >  3000){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }
                
            }

            console.info("页面展示的数据"+this.temList);
            this.webData.edges = this.temList;
            
        }
    }
}
</script>

<static-query>
query Websoft9service{
     Websoft9service: allService (sort: { by: "name", order: DESC }){
      edges {
        node{
          id
          name
          skuid
          brief
          deliver
          pricing
          detailCn
          detailEn
          target
          category
        }
      }
    }
}

</static-query>