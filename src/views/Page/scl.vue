<template>
    <div class="scl-container">
        <img class="header-img" src="http://shzzpt.org.cn/web/assets/img/sclbanner.jpg"/>
        <div class="scl-chinese">机构简介</div>
        <div class="scl-eng">INTRODUCE</div>
        <video class="scl-video"
               src="http://gyhfile.shzzfw.com/%E6%85%88%E5%B1%95%E8%81%94112.mp4"
               type="video/mp4" controls poster="../../assets/img/cishan.jpg"></video>

        <div class="scl-desc">
            <img class="scl-desc-img"
                 src="http://gyhfile.shzzfw.com/%E6%9C%BA%E6%9E%84%E4%BB%8B%E7%BB%8D%E7%9A%84%E5%9B%BE%E7%89%87%E6%9B%BF%E6%8D%A2%E6%88%90%E8%BF%99%E4%B8%AA.jpg"
                 alt="">
            <div class="scl-desc-title">首都公益慈善联合会简介</div>
            <div class="scl-desc-content">
                首都公益慈善联合会(原名:首都慈善公益组 织联合会)成立于2007年12月，由北京青少 年发展基金会等13家慈善公益组织发起，是全国第一家省级慈善公益行业组织。2015年被北京市民政局评为“5A”级社会组织。
            </div>
            <div class="scl-desc-content">
                首都公益慈善联合会是连接政府、慈善公益 组织和社会三方的桥梁和纽带，具有行业服 务、协调和管理功能。首都公益慈善联合会在 制订慈善组织行业规范、加强慈善组织能力 建设、建立慈善组织诚信系统等方面积极开
                展工作，并连续多年承接“首都慈善晚会”等 大型慈善活动、承接“首都慈善奖”组织工 作,不断促进首都慈善公益事业健康、有序发 展。5年来，会员单位共筹集各类款物约45.82亿元，项目遍布全国，受益人群超过1
                亿人次。
            </div>
        </div>
        <img class="scl-jiben-img" src="../../assets/img/sbanner1.jpg"/>
        <div class="scl-jiben">
            <div class="scl-jiben-chinese">慈善北京的基本特征</div>
            <div class="scl-jiben-eng">BASIC FEATURE</div>
            <div class="scl-jiben-content">
                “慈善北京”赋予了北京慈善事业发展的高端品质，包含着慈善文化繁荣发展、慈善组织茁壮成长、慈善活动丰富多彩、社会大众广泛参与等丰富内涵，也体现了“慈善北京”全民慈善、效能慈善、惠民慈善、诚信慈善、创新慈善”五个基本特征。
            </div>
        </div>
        <div class="clssify">
            <div class="classify-title">
                <img class="classify-img" src="http://shzzpt.org.cn/web/assets/img/ic1.jpg" alt=""> —— 让慈善成为时尚
            </div>
            <div class="classify-content">
                发展慈善事业是全社会的共同心声,也是全社会的共同责任，离不开社会各界和广大民众的广泛参与。倡导“全民慈善”，旨在通过慈善宣传、慈善活动，弘扬慈善理念，传播慈善文化，提升全民现代慈善意识，培育全民的慈善精神和慈善素养，在全社会营造一种人人关注慈善、热心支持慈善、积极参与慈善的浓厚氛围，让慈善成为全社会的自觉行动、生活方式和价值追求。随着人们对慈善认识和参与度的不断提高，建设“慈善北京”、发展慈善事业将拥有更广泛的群众基础、更优良的社会环境。
            </div>
            <div class="classify-list">
                <div class="classify-item" @click="toPreview(classify1,more1,index)" v-for="(item,index) in classify1.slice(0,more1?classify1.length:2)" :key="index">
                    <img class="classify-item-img"
                         :src="item.img"/>
                    <div class="classify-item-title ovHide">{{item.title}}</div>
                </div>
            </div>
            <div class="classify-more" v-if="! more1" @click="more1 = !more1">查看更多</div>
        </div>
        <div class="clssify">
            <div class="classify-title">
                <img class="classify-img" src="http://shzzpt.org.cn/web/assets/img/ic2.jpg" alt=""> —— 让慈善高效专业
            </div>
            <div class="classify-content">
                讲求效能是现代慈善的基本要求，是衡量慈善发展水平的重要标尺，也是慈善能否赢得社会尊重和认可的重要砝码。随着现代慈善理念的不断普及，社会对慈善资金运作的效率和效用给予了更多的关注，很大程度上影响着人们参与慈善的积极性。要通过培育运作高效的慈善组织、建设专业务实的从业队伍、推出科学实用的慈善项目、健全系统配套的支持政策，不断提高慈善工作的专业化、科学化水平,不断提高慈善生产力、慈善效率和效益，实现慈善事业又好又快发展。
            </div>
            <div class="classify-list">
                <div class="classify-item" @click="toPreview(classify2,more2,index)" v-for="(item,index) in classify2.slice(0,more2?classify2.length:2)" :key="index">
                    <img class="classify-item-img"
                         :src="item.img"/>
                    <div class="classify-item-title ovHide">{{item.title}}</div>
                </div>
            </div>
            <div class="classify-more" v-if="! more2" @click="more2 = !more2">查看更多</div>
        </div>
        <div class="clssify">
            <div class="classify-title">
                <img class="classify-img" src="http://shzzpt.org.cn/web/assets/img/ic3.jpg" alt=""> —— 让爱心成为力量
            </div>
            <div class="classify-content">
                惠民是慈善与生俱来的天然属性。现代慈善所涉及的领域日益拓宽,但扶贫济困、救急解难仍是慈善重点关注的领域。改善基本民生、增进社会福祉、促进社会公平，率先全面建成小康社会慈善都发挥着不可替代的作用。推进“慈善北京”建设，积极引导全市慈善资源关爱弱势群体，帮扶困难群众，向社会提供实实在在的困难救助、精神关怀、能力提升、社会融入等慈善服务,让慈善看得见、摸得着、感受得到。
            </div>
            <div class="classify-list">
                <div class="classify-item" @click="toPreview(classify3,more3,index)" v-for="(item,index) in classify3.slice(0,more3?classify3.length:2)" :key="index">
                    <img class="classify-item-img"
                         :src="item.img"/>
                    <div class="classify-item-title ovHide">{{item.title}}</div>
                </div>
            </div>
            <div class="classify-more" v-if="! more3" @click="more3 = !more3">查看更多</div>
        </div>
        <div class="clssify">
            <div class="classify-title">
                <img class="classify-img" src="http://shzzpt.org.cn/web/assets/img/ic4.jpg" alt=""> —— 让慈善阳光透明
            </div>
            <div class="classify-content">
                惠民是慈善与生俱来的天然属性。现代慈善所涉及的领域日益拓宽,但扶贫济困、救急解难仍是慈善重点关注的领域。改善基本民生、增进社会福祉、促进社会公平，率先全面建成小康社会慈善都发挥着不可替代的作用。推进“慈善北京”建设，积极引导全市慈善资源关爱弱势群体，帮扶困难群众，向社会提供实实在在的困难救助、精神关怀、能力提升、社会融入等慈善服务,让慈善看得见、摸得着、感受得到。
            </div>
            <div class="classify-list">
                <div class="classify-item" @click="toPreview(classify4,more4,index)" v-for="(item,index) in classify4.slice(0,more4?classify4.length:2)" :key="index">
                    <img class="classify-item-img"
                         :src="item.img"/>
                    <div class="classify-item-title ovHide">{{item.title}}</div>
                </div>
            </div>
            <div class="classify-more" v-if="! more4" @click="more4 = !more4">查看更多</div>
        </div>
        <div class="clssify">
            <div class="classify-title">
                <img class="classify-img" src="http://shzzpt.org.cn/web/assets/img/ic5.jpg" alt=""> —— 让慈善日新月益
            </div>
            <div class="classify-content">
                创新是慈善事业做大做强做好的根本途径，更是确保北京慈善事业始终走在全国前列的强大动力。建设“慈善北京”必须紧跟首都发展的新形势、人民群众的新期待和建设国际一流和谐宜居之都的新要求，在慈善理念、组织治理、筹资方式、项目运作、评价体系等方面全面推进改革与创新,促进首都慈善事业更加专业、更具活力、更有魅力。
            </div>
            <div class="classify-list">
                <div class="classify-item" @click="toPreview(classify5,more5,index)" v-for="(item,index) in classify5.slice(0,more5?classify5.length:2)" :key="index">
                    <img class="classify-item-img"
                         :src="item.img"/>
                    <div class="classify-item-title ovHide">{{item.title}}</div>
                </div>
            </div>
            <div class="classify-more" v-if="! more5" @click="more5 = !more5">查看更多</div>
        </div>
        <div class="scl-yq">
            <div class="scl-yq-title">首都公益慈善联合会协同会员单位北京市慈善协会全面启动抗击疫情专班助力疫情防控</div>
            <div class="scl-yq-content">
                <div>
                    在2020年抗击新冠疫情最关键的时刻，作为首都慈善联合会会员单位的北京市 慈善协会临危受命被指定为代表市政府接受社会捐赠单位。联合会及协会全体人 员不怕危险、积极投身到此项工作中。一是迅速启动战时工作机制。实行“全天 候”抗疫，从接收海外物资回流到支持复工复产，再到支持援外，全过程参与。 二是严格落实专班要求，实行了最为严格的接受捐赠管理制度。及时编制《境外 捐赠物资进口操作指南》，为海外捐赠人提供捐赠说明书，从会员单位引入律师 和审计团队参与接收捐赠管理。三是创新管理模式，充分发挥平台和纽带作用。 建立专项资金捐赠信息管理与公示系统，做到一分钱的捐赠也能开具电子证书和 收据;充分利用公募资质，与其它社会组织合作开发公募项目，支持抗疫工作。 截至8月9日，接收款物合计10579.85万元，拨付款物合计9718.86万元。其中接 收捐赠资金2667笔，共计4147.83万元;接收捐赠物资116批次，共计575.99万件， 折合人民币价值约6432.02万元。拨付资金主要支援湖北省的抗疫工作，98%的物 资支援北京市的抗疫工作。
                </div>
            </div>
        </div>
        <div class="scl-chinese">抗疫风采</div>
        <!--<div class="scl-eng">DONATION ACTIVITIES</div>-->
        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide" v-for="(item,index) in loves" :key="index">
                <div class="mine-item" @click="toPreview(loves,true,index)">
                    <img class="item-image" :src="item.img"/>
                    <div class="item-title ovHide">{{ item.title }}</div>
                </div>
            </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!--<div class="scl-love">-->
            <!--<div class="love-item" v-for="(item,index) in loves" :key="index">-->
                <!--<div class="love-title">{{item.title}}</div>-->
                <!--<img class="love-img" :src="item.img"/>-->
                <!--<div class="love-content">{{item.content}}</div>-->
            <!--</div>-->
        <!--</div>-->
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="previews" @change="onChange">
            <template class="title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
    </div>
</template>

<script>
    export default {
        name: "scl",
        data() {
            return {
                classify1:[
                    {
                        img:'http://gyhfile.shzzfw.com/1.%E5%8C%97%E4%BA%AC%E6%98%8E%E4%BC%A6%E5%85%AC%E7%9B%8A%E5%9F%BA%E9%87%91%E4%BC%9A2018%E5%B9%B4%E5%BA%A6%E5%A4%A7%E4%BC%9A.jpg',
                        title:'北京明伦公益基金会2018年度大会'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/2.%E5%8C%97%E4%BA%AC%E5%B8%82%E9%80%9A%E5%B7%9E%E5%8C%BA%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E8%81%94%E5%90%88%E5%85%AB%E9%80%9A%E7%BD%91%E4%B8%BE%E5%8A%9E%E7%9A%84%E2%80%9C%E6%85%88%E5%96%84%E5%A4%A7%E9%9B%86-%E5%8F%98%E5%BA%9F%E4%B8%BA%E5%AE%9D%E2%80%9D%E9%97%B2%E7%BD%AE%E5%93%81%E4%BA%A4%E6%98%93%E4%BC%9A%E7%8E%B0%E5%9C%BA.jpg',
                        title:'北京市通州区慈善协会联合八通网举办的“慈善大集-变废为宝”闲置品交易会现场'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/3.%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%9F%BA%E9%87%91%E4%BC%9A%E5%85%AC%E7%9B%8A%E8%B7%91%E6%B4%BB%E5%8A%A8.jpg',
                        title:'北京市慈善基金会公益跑活动'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/4.%E7%BA%A2%E4%B8%B9%E4%B8%B9%E9%82%80CCTV%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%92%99%E7%9C%BC%E4%B8%8E%E8%A7%86%E9%9A%9C%E6%9C%8B%E5%8F%8B%E4%BA%A4%E6%B5%81.jpg',
                        title:'红丹丹邀CCTV主持人蒙眼与视障朋友交流'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/5.%E6%BF%AE%E5%AD%98%E6%98%95%E5%8F%82%E5%8A%A0%E5%9C%B0%E5%9D%9B%E5%8C%BB%E9%99%A2%E8%89%BE%E6%BB%8B%E7%97%85%E5%84%BF%E7%AB%A5%E5%85%B3%E6%80%80%E6%B4%BB%E5%8A%A8.jpg',
                        title:'濮存昕参加地坛医院艾滋病儿童关怀活动'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/6.%E5%8C%97%E4%BA%AC%E5%B1%88%E6%AD%A3%E7%88%B1%E5%BF%83%E5%9F%BA%E9%87%91%E4%BC%9A%E7%BB%84%E7%BB%87%E5%BF%83%E8%A1%80%E7%AE%A1%E5%8C%BB%E7%94%9F%E5%AE%A3%E8%AF%BB%E5%8C%BB%E5%B8%88%E5%BF%97%E6%84%BF%E8%80%85%E8%AA%93%E8%A8%80.jpg',
                        title:'北京屈正爱心基金会组织心血管医生宣读医师志愿者誓言'
                    }
                ],
                more1:false,
                classify2:[
                    {
                        img:'http://gyhfile.shzzfw.com/01.%E4%BA%AC%E5%8F%B0%E5%85%AC%E7%9B%8A%E8%AE%BA%E5%9D%9B.jpg',
                        title:'京台公益论坛'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/03.%E5%8C%97%E4%BA%AC%E5%B8%82%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E6%B0%91%E4%B8%BB%E5%8D%8F%E5%95%86%E6%81%B3%E8%B0%88%E4%BC%9A.jpg',
                        title:'北京市社会组织民主协商恳谈会'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/04.%E5%8C%97%E4%BA%AC%E6%98%A5%E8%8B%97%E5%84%BF%E7%AB%A5%E6%95%91%E5%8A%A9%E5%9F%BA%E9%87%91%E4%BC%9A%E5%BF%97%E6%84%BF%E8%80%85%E5%88%86%E4%BA%AB%E4%BC%9A.jpg',
                        title:'北京春苗儿童救助基金会志愿者分享会'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/05.%E5%8C%97%E4%BA%AC%E8%87%B4%E8%AF%9A%E5%86%9C%E6%B0%91%E5%B7%A5%E6%B3%95%E5%BE%8B%E6%8F%B4%E5%8A%A9%E4%B8%AD%E5%BF%83%E4%B8%93%E8%81%8C%E5%BE%8B%E5%B8%88%E8%83%BD%E5%8A%9B%E5%9F%B9%E8%AE%AD%E5%8F%8A%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93.jpg',
                        title:'北京致诚农民工法律援助中心专职律师能力培训及工作总结'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/06.%E5%8C%97%E4%BA%AC%E6%85%88%E7%A6%8F%E5%85%AC%E7%9B%8A%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9D%9A%E5%AE%88%E5%B2%97%E4%BD%8D%E7%9A%84%E5%BF%97%E6%84%BF%E8%80%85.jpg',
                        title:'北京慈福公益基金会坚守岗位的志愿者'
                    }
                ],
                more2:false,
                classify3:[
                    {
                        img:'http://gyhfile.shzzfw.com/01.2016%E5%B9%B4%E6%B2%B3%E5%8C%97%E9%98%9C%E5%9F%8E%E5%8E%BF%E5%89%8D%E5%BE%90%E5%B0%8F%E5%AD%A6%E5%AD%A6%E7%94%9F%E5%BE%97%E5%88%B0%E5%96%9C%E7%88%B1%E7%9A%84%E5%9B%BE%E4%B9%A6%E5%85%B4%E5%A5%8B%E4%B8%8D%E5%B7%B2.jpg',
                        title:'2016年河北阜城县前徐小学学生得到喜爱的图书兴奋不已'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/02.2017%E5%B9%B4%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%89%8D%E5%BE%80%E5%BC%98%E7%A6%8F%E8%BE%BE%E5%85%BB%E8%80%81%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83%E6%85%B0%E9%97%AE%E6%95%AC%E8%80%81%E9%99%A2%E8%80%81%E4%BA%BA.jpg',
                        title:'2017年北京市慈善协会工作人员前往弘福达养老服务中心慰问敬老院老人'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/03.2016%E5%B9%B4%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E6%8F%B4%E5%BB%BA%E5%90%8E%E7%9A%84%E4%BA%91%E5%8D%97%E9%BE%99%E6%B3%89%E4%B8%AD%E5%AD%A6%E6%A0%A1%E5%9B%AD.jpg',
                        title:'2016年北京市慈善协会援建后的云南龙泉中学校园'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/04.2018%E5%B9%B4%E7%88%B1%E5%BF%83%E6%88%90%E5%B0%B1%E6%9C%AA%E6%9D%A5%E5%9C%86%E6%A2%A6%E8%A1%8C%E5%8A%A8%E5%A4%A7%E5%90%88%E5%BD%B1.jpg',
                        title:'2018年爱心成就未来圆梦行动大合影'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/05.2014%E5%B9%B4%EF%BC%8C%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E4%B8%BE%E5%8A%9E%E7%9A%84%E2%80%9C%E7%88%B1%E5%BF%83%E6%88%90%E5%B0%B1%E6%9C%AA%E6%9D%A5%E2%80%9D%E5%8A%A9%E5%AD%A6%E6%AC%BE%E5%8F%91%E6%94%BE%E4%BB%AA%E5%BC%8F.jpg',
                        title:'2014年，北京市慈善协会举办的“爱心成就未来”助学款发放仪式'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/06%E3%80%81%E5%85%88%E5%A4%A9%E6%80%A7%E5%BF%83%E8%84%8F%E7%97%85%E6%89%8B%E6%9C%AF.jpg',
                        title:'先天性心脏病手术'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/07.%E5%BF%83%E7%9B%AE%E5%9B%BE%E4%B9%A6%E9%A6%86%E9%80%81%E4%B9%A6-20130620-%E9%82%A2%E5%8F%B0%E5%B9%B3%E4%B9%A1%E5%8E%BF%E5%AD%9F%E6%9D%B0%E7%9B%B2%E4%BA%BA%E5%AD%A6%E6%A0%A1.jpg',
                        title:'心目图书馆送书 20130620 邢台平乡县孟杰盲人学校'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/08.%E5%8C%97%E4%BA%AC%E5%B1%88%E6%AD%A3%E7%88%B1%E5%BF%83%E5%9F%BA%E9%87%91%E4%BC%9A%E7%BB%84%E7%BB%87%E8%A5%BF%E8%97%8F%E8%B5%B4%E4%BA%AC%E6%B2%BB%E7%96%97%E5%85%88%E5%BF%83%E7%97%85%E6%82%A3%E5%84%BF%E5%88%B0%E5%A4%A9%E5%AE%89%E9%97%A8.jpg',
                        title:'北京屈正爱心基金会组织西藏赴京治疗先心病患儿到天安门'
                    }
                ],
                more3:false,
                classify4:[
                    {
                        img:'http://gyhfile.shzzfw.com/01.%E5%9F%BA%E9%87%91%E4%BC%9A%E4%B8%AD%E5%BF%83%E7%BD%91-%E4%B8%AD%E5%9F%BA%E9%80%8F%E6%98%8E%E6%8C%87%E6%95%B0FTI.jpg',
                        title:'基金会中心网-中基透明指数FTI'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/02.%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B3%95%E5%BE%8B%E6%8F%B4%E5%8A%A9%E5%9F%BA%E9%87%91%E4%BC%9A%E6%8E%A5%E5%8F%97%E4%BC%9A%E8%AE%A1%E5%B8%88%E4%BA%8B%E5%8A%A1%E6%89%80%E5%AE%A1%E8%AE%A1.jpg',
                        title:'北京市法律援助基金会接受会计师事务所审计'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/03.%E5%8C%97%E4%BA%AC%E9%9D%92%E5%B0%91%E5%B9%B4%E5%8F%91%E5%B1%95%E5%9F%BA%E9%87%91%E4%BC%9A%E6%8D%90%E8%B5%A0%E6%AC%BE%E7%89%A9%E4%BF%A1%E6%81%AF%E6%8A%AB%E9%9C%B2%E8%AE%B0%E8%80%85%E4%BC%9A.jpg',
                        title:'北京青少年发展基金会捐赠款物信息披露记者会'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/04.%E5%8C%97%E4%BA%AC%E9%9D%92%E5%B0%91%E5%B9%B4%E5%8F%91%E5%B1%95%E5%9F%BA%E9%87%91%E4%BC%9A%E6%8D%90%E8%B5%A0%E6%AC%BE%E7%89%A9%E6%94%B6%E6%94%AF%E6%83%85%E5%86%B5%E7%94%B5%E5%AD%90%E6%9D%82%E5%BF%97%E5%85%AC%E7%A4%BA.jpg',
                        title:'北京青少年发展基金会捐赠款物收支情况电子杂志公示'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/05.%E5%8C%97%E4%BA%AC%E7%BA%A2%E6%9E%AB%E5%A6%87%E5%A5%B3%E5%BF%83%E7%90%86%E5%92%A8%E8%AF%A2%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83%E6%8D%90%E8%B5%A0%E6%98%8E%E7%BB%86.jpg',
                        title:'北京红枫妇女心理咨询服务中心捐赠明细'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/06.%E7%88%B1%E4%BD%91%E6%85%88%E5%96%84%E5%9F%BA%E9%87%91%E4%BC%9A%E5%96%84%E6%AC%BE%E6%94%B6%E5%85%A5.jpg',
                        title:'爱佑慈善基金会善款收入'
                    }
                ],
                more4:false,
                classify5:[
                    {
                        img:'http://gyhfile.shzzfw.com/01.%E6%88%90%E7%AB%8B%E9%A6%96%E9%83%BD%E6%85%88%E5%96%84%E5%85%AC%E7%9B%8A%E7%BB%84%E7%BB%87%E8%81%94%E5%90%88%E4%BC%9A%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E5%85%9A%E5%BB%BA%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A.jpg',
                        title:'成立首都慈善公益组织联合会社会组织党建工作委员会'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/02.%E5%8C%97%E4%BA%AC%E6%98%A5%E8%8B%97%E5%84%BF%E7%AB%A5%E6%95%91%E5%8A%A9%E5%9F%BA%E9%87%91%E4%BC%9A%E8%80%81%E5%B8%88%E5%B8%A6%E9%A2%86%E5%AD%A9%E5%AD%90%E4%BB%AC%E8%BF%87%E4%BA%86%E5%BC%80%E5%BF%83%E4%B8%87%E5%9C%A3%E8%8A%82.jpg',
                        title:'北京春苗儿童救助基金会老师带领孩子们过了开心万圣节'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/03.%E6%8D%90%E8%B5%A0%E8%80%85%E3%80%81%E5%8F%97%E7%9B%8A%E4%BA%BA%E5%8F%82%E4%B8%8E%E6%90%BA%E7%88%B1%E7%9B%B8%E8%81%9A%E5%8C%97%E4%BA%AC%E9%9D%92%E5%B0%91%E5%B9%B4%E5%8F%91%E5%B1%95%E5%9F%BA%E9%87%91%E4%BC%9A.jpg',
                        title:'捐赠者、受益人参与携爱相聚北京青少年发展基金会'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/04.%E5%8C%97%E4%BA%AC%E7%BA%A2%E4%B8%B9%E4%B8%B9%E6%95%99%E8%82%B2%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B8%AD%E5%BF%83%E4%B8%8E%E8%85%BE%E8%AE%AF%E5%9F%BA%E9%87%91%E5%90%88%E4%BD%9C%E5%8F%91%E6%94%BE%E6%82%A6%E8%AF%BB%E7%9B%92%E5%AD%90.jpg',
                        title:'北京红丹丹教育文化交流中心与腾讯基金合作发放悦读盒子'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/05.%E5%8C%97%E4%BA%AC%E7%BA%A2%E6%9E%AB%E5%A6%87%E5%A5%B3%E5%BF%83%E7%90%86%E5%92%A8%E8%AF%A2%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83%E8%BF%9B%E8%A1%8C%E5%84%BF%E7%AB%A5%E6%80%A7%E5%AE%89%E5%85%A8%E8%AF%BE%E7%A8%8B%E8%AE%B2%E5%BA%A7.jpg',
                        title:'北京红枫妇女心理咨询服务中心进行儿童性安全课程讲座'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/06.%E5%8D%8E%E9%BE%84%E9%A2%90%E5%85%BB%E7%B2%BE%E7%A5%9E%E5%85%B3%E6%80%80%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83%E5%9F%B9%E5%85%BB%E7%BB%84%E5%BB%BA%E6%96%B0%E6%98%A5%E5%90%8C%E4%B9%90%E4%BC%9A%E6%B4%BB%E5%8A%A8.jpg',
                        title:'华龄颐养精神关怀服务中心培养组建新春同乐会活动'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/07.%E5%9B%9B%E5%B7%9D%E5%8C%97%E5%B7%9D%E5%8E%BF%E6%A1%82%E9%91%AB%E5%9F%BA%E9%87%91%E4%BC%9A%E8%80%81%E5%B8%88%E4%B8%BE%E7%9D%80%E4%B8%80%E6%9E%B6%E8%88%AA%E6%A8%A1%E9%A3%9E%E6%9C%BA%E4%B8%8E%E5%AD%A9%E5%AD%90%E4%BB%AC%E5%A5%94%E8%B7%91.jpg',
                        title:'四川北川县桂鑫基金会老师举着一架航模飞机与孩子们奔跑'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/08.%E5%8C%97%E4%BA%AC%E5%85%AC%E7%9B%8A%E6%9C%8D%E5%8A%A1%E5%8F%91%E5%B1%95%E4%BF%83%E8%BF%9B%E4%BC%9A%E5%86%85%E8%92%99%E5%8F%A4%E4%B9%8C%E5%85%B0%E5%AF%9F%E5%B8%83%E5%B8%82%E6%85%88%E5%96%84%E8%B6%85%E5%B8%82%E5%BC%80%E4%B8%9A.jpg',
                        title:'北京公益服务发展促进会内蒙古乌兰察布市慈善超市开业'
                    }
                ],
                more5:false,
                loves:[
                    {
                        title:'北京市慈善协会召开抗击疫情专题工作会',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE1%E6%8A%97%E5%87%BB%E7%96%AB%E6%83%85%E4%B8%93%E9%A2%98%E5%B7%A5%E4%BD%9C%E4%BC%9A.jpg',
                        content:'北京市慈善协会成立抗疫接收捐赠工作领导小组，抗疫期间，工作组领导随时召开专题工作会研究调整工作方案，保证专班工作及时有效。协会同时成立了临时党支部，发挥党员带头作用。全体党员自发捐款，支持疫情防控工作。'
                    },
                    {
                        title:'北京市慈善协会接收社会各界捐赠',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E6%8E%A5%E6%94%B6%E7%A4%BE%E4%BC%9A%E5%90%84%E7%95%8C%E6%8D%90%E8%B5%A0.jpg',
                        content:'北京市慈善协会“抗疫”工作一经启动，受到社会各界人士的关注和支持，图为协会接收社会捐款'
                    },
                    {
                        title:'北京市慈善协会接收夜间抵京的境外捐赠物',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE3%E6%8E%A5%E6%94%B6%E5%A4%9C%E9%97%B4%E6%8A%B5%E4%BA%AC%E7%9A%84%E5%A2%83%E5%A4%96%E6%8D%90%E8%B5%A0%E7%89%A9.jpg',
                        content:'非常时期，北京市慈善协会全天候值守，克服时差困难，协助办理捐赠物资入境手续，保证抗疫物资按要求尽快运回国内，并交付抗击疫情第一线。图为北京市慈善协会工作人员夜间接收抵京的境外物资工作现场。'
                    },
                    {
                        title:'北京市慈善协会工作人员核对盘点捐赠物资',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE4%E7%9B%98%E7%82%B9%E6%8D%90%E8%B5%A0%E7%89%A9%E8%B5%84.jpg',
                        content:'疫情时期，全球相关物资都比较紧缺。协会接收到的捐赠物资规格型号繁多，为了确保每一批物资都能按照功能交付到最需要的人员使用，协会工作人员加班加点认真核对盘点每批物资，按照使用要求、捐赠意向等进行发放。'
                    },
                    {
                        title:'北京市民政局副局长赵学刚在北京市慈善协会会长温庆云等人陪同下检查指导协会抗击疫情物资接收发放工作',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE5%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B0%91%E6%94%BF%E5%B1%80%E5%89%AF%E5%B1%80%E9%95%BF%E8%B5%B5%E5%AD%A6%E5%88%9A%E5%9C%A8%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E4%BC%9A%E9%95%BF%E6%B8%A9%E5%BA%86%E4%BA%91%E7%AD%89%E4%BA%BA%E9%99%AA%E5%90%8C%E4%B8%8B%E6%A3%80%E6%9F%A5%E6%8C%87%E5%AF%BC%E5%8D%8F%E4%BC%9A%E7%89%A9%E8%B5%84%E6%8E%A5%E6%94%B6%E5%8F%91%E6%94%BE%E5%B7%A5%E4%BD%9C.jpg',
                        content:'北京市慈善协会“抗疫”专班工作启动后，得到了市委社工委民政局和市物资捐赠专班大力支持，图为北京市民政局副局长赵学刚在北京市慈善协会会长温庆云等人陪同下检查指导协会物资接收发放工作'
                    },
                    {
                        title:'多批捐赠物资按照用途拨付到抗击疫情第一线后北京市协会工作人员合影',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE6%E6%8D%90%E8%B5%A0%E7%89%A9%E8%B5%84%E6%8C%89%E7%85%A7%E7%94%A8%E9%80%94%E5%8F%91%E6%94%BE%E5%88%B0%E6%8A%97%E5%87%BB%E7%96%AB%E6%83%85%E7%AC%AC%E4%B8%80%E7%BA%BF%E5%90%8E%E5%8D%8F%E4%BC%9A%E5%85%A8%E4%BD%93%E5%90%88%E5%BD%B1.jpg',
                        content:'北京市慈善协会全体工作人员全天候工作机制，接收了多批国内外捐赠物资，取得了接收捐赠工作阶段性成果，为首都的疫情联防联控工作做出了应有的贡献，图为北京市慈善协会工作人员合影。'
                    },
                    {
                        title:'京慈疫情防控慈善信托向北京市东城区和平里街道捐赠防疫物资',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE7%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E4%BA%AC%E6%85%88%E7%96%AB%E6%83%85%E9%98%B2%E6%8E%A7%E6%85%88%E5%96%84%E4%BF%A1%E6%89%98%E7%89%A9%E8%B5%84%E4%BA%A4%E4%BB%98%E5%92%8C%E5%B9%B3%E9%87%8C%E8%A1%97%E9%81%93%E6%8A%97%E5%87%BB%E7%96%AB%E6%83%85%E7%AC%AC%E4%B8%80%E7%BA%BF%E4%BD%BF%E7%94%A8.jpg',
                        content:'在北京市慈善协会的大力推动下，京慈疫情防控慈善信托物资用于开展社区疫情防控，为坚守疫情防控一线的社区工作者、志愿者购买防疫用品。图为京慈疫情防控慈善信托向北京市东城区和平里街道接收捐赠。'
                    },
                    {
                        title:'北京市慈善协会为公共场所购置测温仪投入使用',
                        img:'http://gyhfile.shzzfw.com/%E5%9B%BE8%E5%8C%97%E4%BA%AC%E5%B8%82%E6%85%88%E5%96%84%E5%8D%8F%E4%BC%9A%E4%B8%BA%E5%85%AC%E5%85%B1%E5%9C%BA%E6%89%80%E8%B4%AD%E7%BD%AE%E7%9A%84%E6%B5%8B%E6%B8%A9%E4%BB%AA%E7%94%A8%E4%BA%8E%E7%96%AB%E6%83%85%E9%98%B2%E6%8E%A7%E5%B7%A5%E4%BD%9C.jpg',
                        content:'疫情防控常态化，北京市慈善协会为公共场所配备的测温仪投入使用，支持复工复产。'
                    }
                ],

                curList:[],
                previews:[],
                startPosition:0,
                previewTitle:'',
                show:false,
                swiperOption: {
                    //可见图片张数
                    slidesPerView: 2,
                    // 默认选中中间一张
                    centeredSlides: true,
                    //自动轮播
                    autoplay: {
                        delay: 5000,
                        //当用户滑动图片后继续自动轮播
                        disableOnInteraction: false,
                        stopOnLastSlide: false
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    //开启循环模式
                    loop: true,
                    on: {}
                },
            }
        },
        methods:{
            toPreview(list,more,index){
                this.curList = list
                this.previews = list.map(item=>{return item.img}).slice(0,more?list.length:2)
                this.startPosition = index
                this.show = true
                this.previewTitle = list[index].title
            },
            onChange(index) {
                this.previewTitle = this.curList[index].title
                this.startPosition = index;
            },
        }
    }
</script>

<style scoped lang="scss">
    .swiper-slide-active, .swiper-slide-duplicate-active {
        transform: scale(1.1);
        z-index: 1000;
    }

    .scl-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        .header-img {
            width: 100%;
        }
        .scl-chinese {
            margin-top: 20px;
            font-size: 36px;
            line-height: 60px;
            letter-spacing: 7px;
            color: #2f2f2f;
        }
        .scl-eng {
            font-size: 20px;
            line-height: 36px;
            color: #a1a1a1;
            text-align: center;
            padding-bottom: 20px;
        }
        .scl-video {
            width: 100%;
        }
        .scl-desc {
            margin: 20px;
            .scl-desc-img {
                width: 100%;
            }
            .scl-desc-title {
                font-size: 30px;
                font-weight: bold;
                font-stretch: normal;
                line-height: 30px;
                margin-top: 20px;
                color: #333333;
            }
            .scl-desc-content {
                font-size: 24px;
                margin-top: 10px;
                text-indent: 48px;
                line-height: 36px;
                color: #333333;
                text-align: justify;
            }
        }
        .scl-jiben-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
        .scl-jiben {
            margin-top: -210px;
            width: 96%;
            padding: 40px 20px;
            background-color: #ffffff;
            box-shadow: 0px 7px 35px 0px rgba(41, 41, 41, 0.32);
            .scl-jiben-chinese {
                font-size: 36px;
                line-height: 51px;
                letter-spacing: 0px;
                color: #2f2f2f;
            }
            .scl-jiben-eng {
                font-size: 20px;
                line-height: 51px;
                letter-spacing: 0px;
                color: #a1a1a1;
            }
            .scl-jiben-content {
                font-size: 24px;
                line-height: 38px;
                text-align: justify;
                color: #666666;
            }
        }
        .clssify {
            width: 96%;
            margin-top: 50px;
            .classify-more{
                width: 120px;
                height: 40px;
                background: #e2412e;
                color: #fff;
                font-size: 16px;
                margin: 10px auto;
                text-align: center;
                line-height: 40px;
            }
            .classify-title {
                height: 40px;
                line-height: 40px;
                font-size: 26px;
                margin-bottom: 10px;
                color: #333333;
                .classify-img {
                    height: 40px;
                }
            }
            .classify-content {
                font-size: 24px;
                text-indent: 48px;
                line-height: 38px;
                text-align: justify;
                color: #333333;
            }
            .classify-list {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-top: 20px;
                justify-content: space-between;
                .classify-item {
                    width: 49%;
                    .classify-item-img {
                        width: 100%;
                        height: 220px;
                    }
                    .classify-item-title {
                        line-height: 50px;
                        height: 50px;
                        text-align: center;
                        font-size: 14px;
                        padding: 0 6px;
                    }
                }
            }
        }
        .scl-yq{
            background-image: url("../../assets/img/sclbanner2.jpg");
            padding: 20px;
            margin-top: 20px;
            .scl-yq-title{
                font-size: 36px;
                line-height: 44px;
                letter-spacing: 4px;
                color: #ffffff;
                margin-bottom: 40px;
                text-align: center;
            }
            .scl-yq-content{
                margin: 0 auto;
                background: #fff;
                padding: 20px;
                font-size: 26px;
                line-height: 38px;
                text-align: justify;
                text-indent: 48px;
                color: #333333;
            }
        }
        .scl-love{
            display: flex;
            flex-direction: column;
            padding: 20px;
            .love-item{
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                border-bottom: 1px solid #f1f1f1;
                .love-title{
                    font-size: 30px;
                    color: #333333;
                    text-align: center;
                }
                .love-img{
                    width: 100%;
                    margin: 20px 0px;
                }
                .love-content{
                    font-size: 26px;
                    line-height: 38px;
                    text-align: justify;
                    text-indent: 48px;
                    color: #666666;
                    margin-bottom: 20px;
                }
            }
        }
        .swiper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 500px;
            margin-top: 10px;

            .swiper-button-prev, .swiper-button-next {
                width: 60px;
                height: 60px;
                background-color: #f5f5f555;
                border-radius: 60px;
            }

            .swiper-slide {
                display: flex;
                align-items: center;
                justify-content: center;

                .mine-item {
                    width: 535px;
                    height: 400px;
                    position: relative;

                    .item-image {
                        object-fit: cover;
                        width: 535px;
                        height: 400px;
                    }

                    .item-title {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        padding: 0 10px;
                        text-align: center;
                        font-size: 28px;
                        color: #ffffff;
                        width: 100%;
                        height: 52px;
                        line-height: 52px;
                        background-color: #00000055;
                    }
                }
            }
        }
    }
</style>