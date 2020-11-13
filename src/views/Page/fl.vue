<template>
    <div class="fl-container">
        <div class="fl-info">
            <div class="fl-info-title">垃圾分类 “家行动”</div>
            <div class="fl-info-label">北京市妇联垃圾分类工作展示</div>
            <div class="fl-info-content">
                为深入贯彻习近平总书记生态文明建设思想，落实蔡奇书记在市妇联调研时提出的关于做好垃圾分类的工作要求和魏小东部长的批示要求，落实全市生活垃圾分类社会动员发动会议精神和任务分工要求，聚焦社会动员发动，北京市妇联结合工作实际，坚持首善标准，充分发挥妇联组织优势，发挥妇女在家庭生活和社会生活中的独特作用，发挥家庭家教家风在基层社会治理中的重要作用，广泛动员发动全市各级妇联组织以及广大妇女和家庭积极参与新时代爱国卫生运动、垃圾分类等工作，在全市广大妇女和家庭中深入开展“垃圾分类‘家’行动”，聚焦“不想分、不会分、不方便分”问题，努力以“小切口”实现“大作为”，切实提升居民知晓率、参与率和正确投放率，引领百万家庭形成垃圾分类新时尚，携手共建美丽北京，共享生态文明成果。
            </div>
        </div>

        <div class="fl-info margin-top">
            <div class="fl-info-title">弘扬新风尚，推动宣传指导广覆盖</div>
            <div class="fl-info-content">
                开展接力承诺活动。在全市广大妇女和家庭中开展“我分类、我承诺”“云”端接力承诺活动，共有124余万人参与。开展“最美家庭做示范 百万家庭齐参与”——“我光盘，我承诺”线上接力活动。开展培训指导服务。依托市妇联20个团体会员，在行业女性群体中开展分类培训，培养垃圾分类推进工作骨干力量。举办北京市妇联“垃圾分类‘家’行动”生活垃圾分类指导线上培训班以及北京市妇联垃圾分类巾帼志愿服务指导培训班。以“益家行”项目为牵引，组织妇女儿童领域社会组织聚焦垃圾分类知识普及等开展社会服务。形成宣传引导声势。面向家庭举办线上线下垃圾分类知识普及讲座开发线上线下结合、具有吸引力的解读宣传文化产品。在《北京少年报》等媒体每月刊发“垃圾分类‘家’行动”专版。依托各级妇联24个新媒体平台，8个抖音、快手等热门直播和资讯分发平台，开展全媒体、高频次的垃圾分类主题宣传。
            </div>
            <div class="fl-info-tag">
                <div>宣传内容</div>
            </div>
            <div class="fl-info-name">垃圾分类沙画</div>
            <video class="fl-info-video"
                   src="http://gyhfile.shzzfw.com/01%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BB%E6%B2%99%E7%94%BB.mp4"
                   poster="../../assets/img/cishan.jpg" controls></video>
            <div class="fl-info-name red">观看宣传片</div>
            <div class="fl-book-title">
                <span>宣传海报</span>
            </div>
            <div class="fl-book-list">
                <div class="book-container">
                    <img src="http://shzzpt.org.cn/web/assets/images/f3-1.png"/>
                    <img src="http://shzzpt.org.cn/web/assets/images/f3-2.png"/>
                    <img src="http://shzzpt.org.cn/web/assets/images/f3-3.png"/>
                </div>
                <div class="book-img-more">滑动查看更多>>></div>
                <div class="book-img">
                    <img src="http://shzzpt.org.cn/web/assets/images/z22.png"/>
                </div>
                <div class="book-img-more">滑动查看更多>>></div>
            </div>
            <div class="fl-book-title">
                <span>杂志宣传</span>
            </div>
            <div class="fl-book-list">
                <div class="book-container">
                    <img v-for="(item,index) in books2" :key="index" :src="item"/>
                </div>
                <div class="book-img-more">滑动查看更多>>></div>
            </div>
            <div class="fl-book-title">
                <span>开展活动</span>
            </div>
            <div class="fl-book-list">
                <div class="book-container">
                    <img v-for="(item,index) in books3" :key="index" :src="item"/>
                </div>
                <div class="book-img-more">滑动查看更多>>></div>
            </div>
        </div>
        <div class="fl-info margin-top">
            <div class="fl-info-title">小家带大家，实现榜样典型强带动</div>
            <div class="fl-info-content">
                加大选树典型力度。在第二季度“首都最美家庭”中选树11户“垃圾分类”家庭以及推选京津冀“最美绿色家庭”的基础上，第三季度选树44户垃圾分类、创建美丽庭院的绿色环保最美家庭，厉行节约、反对浪费的勤俭节约最美家庭。开展以“垃圾分类‘家’行动”为主题的首都最美家庭“云”宣讲活动以及京津冀“最美绿色家庭”“云”宣讲活动，共吸引130万网友在线观看。通过北京电视台《最美我的家》专栏，制播垃圾分类最美家庭故事。发挥骨干带动作用。组织开展最美家庭“一带十”活动，最美家庭带头参与“我分类，我承诺”接力承诺活动、带头开展“敲门行动”，带头参加“桶前值守”、带头进行垃圾分类宣讲、带头参与社区事务。开展“美丽庭院”创建。以“共建美丽庭院、共享品质生活”为主题，以“清洁、整齐、绿色、协调、文明”为目标，引领广大农村家庭成员，从改变家庭环境卫生入手，做到“生活垃圾分类，垃圾及时清理，无卫生死角”，培养良好家庭卫生和生活习惯，打造安居乐业、美丽舒适、文明和谐的家居环境。
            </div>
            <div class="fl-info-tag">
                <div>最美我的家</div>
            </div>
            <div class="fl-video" v-if="videos.length > 0">
                <video class="video-content" :src="videos[curIndex].url" controls :poster="videos[curIndex].image"
                       v-if="videos[curIndex].url"></video>
                <img class="video-content" :src="videos[curIndex].image" v-else>
                <div class="video-preview">
                    <div class="preview-container" v-for="(item,index) in videos"
                         :key="index">
                        <div class="preview-image" :class="{active:curIndex === index}">
                            <img class="preview-image1" :src="item.image" @click="curIndex = index"/>
                        </div>
                        <div class="preview-title">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fl-info margin-top">
            <div class="fl-info-title">小手拉大手，培育健康文明好习惯</div>
            <div class="fl-info-content">
                强化家庭教育指导服务。将垃圾分类工作融入构建覆盖城乡的家庭教育指导服务体系过程中，将绿色环保、垃圾分类知识普及作为科学育儿课程体系和妇女儿童活动中心、家长学校、儿童之家等指导服务的重要内容。结合“陪伴，我们在一起”2020年北京家庭教育主题的培育实践，将共同践行垃圾分类作为亲子陪伴的具体途径和有效载体。开展垃圾分类知识竞赛，引导广大妇女和家庭养成垃圾分类、绿色环保的良好习惯。开展学生创意作品征集。面向全市中小学生举办“陪伴，我们在一起”亲子共同参与垃圾分类创意作品征集，通过孩子和家长共同制作手抄报、发明小妙招、文艺作品和手工作品、短视频等形式，评选一批优秀作品，命名一批“家庭垃圾分类小标兵。“垃圾分类Boys”进万家。编制刊发“垃圾分类Boys”线上系列漫画，指导孩子和家长正确进行垃圾分类。
            </div>
            <div class="fl-info-tag">
                <div>学生创意作品</div>
            </div>
            <div class="fl-video" v-if="videos1.length > 0">
                <video class="video-content" :src="videos1[curIndex1].url" controls :poster="videos1[curIndex1].image"
                       v-if="videos1[curIndex].url"></video>
                <img class="video-content" :src="videos1[curIndex1].image" v-else>
                <div class="video-preview">
                    <div class="preview-container" v-for="(item,index) in videos1"
                         :key="index">
                        <div class="preview-image" :class="{active:curIndex1 === index}">
                            <img :src="item.image" @click="curIndex1 = index"/>
                        </div>
                        <div class="preview-title">{{item.name}}</div>
                        <div class="preview-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
            <div class="fl-book-title">
                <span>“垃圾分类Boys”进万家漫画</span>
            </div>
            <div class="fl-book-list">
                <div class="book-container-x">
                    <img v-for="(item,index) in books4" :key="index" :src="item"/>
                </div>
                <div class="book-img-more">下滑查看更多VVV</div>
            </div>
        </div>
        <div class="fl-info margin-top">
            <div class="fl-info-title">党建带妇建，实现妇联工作新突破</div>
            <div class="fl-info-content">
                切实强化组织领导。坚持党建带妇建、妇建促党建，以“破难行动”为抓手，积极推动构建全市各级妇联组织上下联动、目标一致、运行畅通的工作体系。发挥党员干部作用。充分发动全市各级妇联干部和12万基层执委，在全面掌握垃圾分类“应知应会”知识基础上，利用在职党员“双报到”等形式，积极参与“桶前值守”“敲门行动”“爱国卫生运动”和“周末卫生大扫除”等社区治理工作，将面对面向妇女和家庭开展垃圾分类知识普及作为今年履职、考评的核心内容。形成长效工作机制。各级妇联组织定期向同级党组织汇报“垃圾分类‘家’行动”工作情况，争取同级党组织的指导支持。注重总结基层妇联开展垃圾分类工作的好做法，形成可复制可推广的工作模式，为全市开展垃圾分类工作提供鲜活经验。
            </div>
        </div>
        <div class="fl-info red margin-top">
            <div class="fl-info-title red">上下一盘棋，结合区域优势有创新</div>
            <div class="fl-info-content red">
                各级妇联组织积极行动，开展丰富多彩的垃圾分类主题活动,<br/>扎实推进垃圾分类“家”行动各项工作任务落细落实。
            </div>
        </div>
        <div class="fl-info margin-top">
            <div class="fl-info-title">风采展示</div>
            <div class="fc-list">
                <div class="fc-item" v-for="(item,index) in fc"
                     :key="index" @click="toPreview(fc,index)">
                    <img class="fc-img" :src="item.img"/>
                    <div class="fc-title">{{item.name}}</div>
                </div>
            </div>
        </div>
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="previews" @change="onChange">
            <template class="title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
    </div>
</template>

<script>
    export default {
        name: "fl",
        data() {
            return {
                books1: ['http://shzzpt.org.cn/web/assets/images/f3-1.png', 'http://shzzpt.org.cn/web/assets/images/f3-2.png', 'http://shzzpt.org.cn/web/assets/images/f3-3.png', 'http://shzzpt.org.cn/web/assets/images/z22.png'],
                books2: ['http://gyhfile.shzzfw.com/xczz1.png', 'http://gyhfile.shzzfw.com/xczz2.png', 'http://gyhfile.shzzfw.com/xczz3.png', 'http://gyhfile.shzzfw.com/xczz4.png', 'http://gyhfile.shzzfw.com/xczz5.png'],
                books3: ['http://shzzpt.org.cn/web/assets/images/z1.png', 'http://shzzpt.org.cn/web/assets/images/z2.png', 'http://shzzpt.org.cn/web/assets/images/z3.png'],
                videos: [
                    {
                        name: '林桂珍',
                        image: 'http://shzzpt.org.cn/web/assets/images/f3-1.jpg',
                        url: 'http://gyhfile.shzzfw.com/20200807%E6%9E%97%E6%A1%82%E7%8F%8D%EF%BC%88%E9%AB%98%E6%B8%85%E5%B8%A6%E5%8F%B0%E6%A0%87%E7%89%88%EF%BC%89.mp4'
                    },
                    {
                        name: '张泮',
                        image: 'http://shzzpt.org.cn/web/assets/images/f3-1.jpg',
                        url: 'http://gyhfile.shzzfw.com/20200814%E5%BC%A0%E6%B3%AE%20%EF%BC%88%E9%AB%98%E6%B8%85%E5%B8%A6%E5%8F%B0%E6%A0%87%E7%89%88%EF%BC%89.mp4'
                    },
                    {
                        name: '盛娟',
                        image: 'http://shzzpt.org.cn/web/assets/images/f3-1.jpg',
                        url: 'http://gyhfile.shzzfw.com/20200814%E5%BC%A0%E6%B3%AE%20%EF%BC%88%E9%AB%98%E6%B8%85%E5%B8%A6%E5%8F%B0%E6%A0%87%E7%89%88%EF%BC%89.mp4'
                    },
                    {
                        name: '陶耀华',
                        image: 'http://shzzpt.org.cn/web/assets/images/f3-1.jpg',
                        url: 'http://gyhfile.shzzfw.com/20200925%E9%99%B6%E8%80%80%E5%8D%8E%E9%AB%98%E6%B8%85%E5%B8%A6%E5%8F%B0%E6%A0%87%E7%89%88.mp4'
                    }
                ],
                curIndex: 0,
                videos1: [
                    {
                        name: '曹珈瑞',
                        content: '丰台区阳春小学',
                        image: 'http://shzzpt.org.cn/web/assets/images/111.jpg',
                        url: 'http://gyhfile.shzzfw.com/%E5%A4%A7%E5%85%B4%E5%8C%BA%E7%AC%AC%E4%BA%8C%E5%B0%8F%E5%AD%A6%20%E6%9B%B9%E8%89%BA%E8%BD%A9.mp4'
                    },
                    {
                        name: '曹艺轩',
                        content: '大兴区第二小学',
                        image: 'http://shzzpt.org.cn/web/assets/images/222.jpg',
                        url: 'http://gyhfile.shzzfw.com/%E5%A4%A7%E5%85%B4%E5%8C%BA%E7%AC%AC%E4%BA%8C%E5%B0%8F%E5%AD%A6%20%E6%9B%B9%E8%89%BA%E8%BD%A9.mp4'
                    },
                    {
                        name: '徐晟荣',
                        content: '海淀区玉泉小学',
                        image: 'http://shzzpt.org.cn/web/assets/images/333.jpg',
                        url: 'http://gyhfile.shzzfw.com/%E6%B5%B7%E6%B7%80%E5%8C%BA%E7%8E%89%E6%B3%89%E5%B0%8F%E5%AD%A6%20%20%E5%BE%90%E6%99%9F%E8%8D%A3.mp4'
                    },
                    {
                        name: '林雨轩',
                        content: '后南仓小学',
                        image: 'http://shzzpt.org.cn/web/assets/images/444.jpg',
                        url: 'http://gyhfile.shzzfw.com/%E5%90%8E%E5%8D%97%E4%BB%93%E5%B0%8F%E5%AD%A6%20%20%E6%9E%97%E9%9B%A8%E8%BD%A9.mp4'
                    },
                    {
                        name: '褚敏喆',
                        content: '怀柔区渤海镇中心小学',
                        image: 'http://shzzpt.org.cn/web/assets/images/555.jpg',
                        url: 'http://gyhfile.shzzfw.com/%E6%80%80%E6%9F%94%E5%8C%BA%E6%B8%A4%E6%B5%B7%E9%95%87%E4%B8%AD%E5%BF%83%E5%B0%8F%E5%AD%A6%20%20%E8%A4%9A%E6%95%8F%E5%96%86.mp4'
                    }
                ],
                curIndex1: 0,
                books4: ['http://gyhfile.shzzfw.com/%E2%80%9C%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BBBoys%E2%80%9D%E7%BA%BF%E4%B8%8A%E7%B3%BB%E5%88%97%E6%BC%AB%E7%94%BB%E7%AC%AC%E4%B8%80%E6%9C%9F.png',
                    'http://gyhfile.shzzfw.com/%E2%80%9C%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BBBoys%E2%80%9D%E7%BA%BF%E4%B8%8A%E7%B3%BB%E5%88%97%E6%BC%AB%E7%94%BB%E7%AC%AC%E4%BA%8C%E6%9C%9F.png',
                    'http://gyhfile.shzzfw.com/%E2%80%9C%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BBBoys%E2%80%9D%E7%BA%BF%E4%B8%8A%E7%B3%BB%E5%88%97%E6%BC%AB%E7%94%BB%E7%AC%AC%E4%B8%89%E6%9C%9F.png'],
                fc : [
                    {
                        img: 'http://gyhfile.shzzfw.com/fl1.jpg',
                        name: '“两桶一袋+绿色当铺回收”垃圾分类宣传活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl2.jpg',
                        name: '2020年第一季度“首都最美家庭”韩冬家庭拍摄践行垃圾减量分类'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl3.jpg',
                        name: '北京市妇联垃圾分类”益家行“示范社区项目 落地房山区拱辰街道'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl4.jpg',
                        name: '北京市妇联垃圾分类”益家行“示范社区项目落地东城区前门街道'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl5.jpg',
                        name: '北京市妇联垃圾分类”益家行“示范社区项目落地房山区拱辰街道'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl6.jpg',
                        name: '北京市妇联垃圾分类”益家行“示范社区项目落地丰台区大红门街道'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl7.jpg',
                        name: '北京市妇联垃圾分类”益家行“示范社区项目落地通州区通运街道'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl8.jpg',
                        name: '北京市妇联美丽庭院创建暨垃圾分类工作推进会'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl9.jpg',
                        name: '昌平区“最美家庭“垃圾分类”一带十”活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl10.jpg',
                        name: '昌平区妇联组织各镇街开展垃圾分类“嘉年华”活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl11.jpg',
                        name: '朝阳区第二实验小学双桥校区高部 陈筱萌'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl12.jpg',
                        name: '朝阳区妇联开展家庭垃圾分类与光盘行动主题活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl13.jpg',
                        name: '大兴区美丽庭院创建项目'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl14.jpg',
                        name: '东高地街道 小手拉大手活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl15.jpg',
                        name: '东铁匠营街道 周末“敲门行动”'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl16.jpg',
                        name: '房山美丽庭院创建'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl17.jpg',
                        name: '房山区妇联开展推进生活垃圾分类“家”行动宣传月活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl18.jpg',
                        name: '海淀区 红英小学（本）二4班 张子涵'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl19.jpg',
                        name: '海淀区妇联党组织“双报到” 暨垃圾分类从我做起宣传教育活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl20.jpg',
                        name: '花家地实验小学 岳咏轩'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl21.jpg',
                        name: '怀柔区妇联垃圾分类新时尚  绿色环保“家”行动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl22.jpg',
                        name: '巾帼志愿者进行垃圾分类“桶前教育”，效果显著'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl23.jpg',
                        name: '巾帼志愿者进行垃圾分类“桶前教育”'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl24.jpg',
                        name: '垃圾分类，巾帼先行宣传活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl25.jpg',
                        name: '垃圾分类“家”行动系列活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl26.jpg',
                        name: '垃圾分类从我做起'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl27.jpg',
                        name: '垃圾分类工作调研'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl28.jpg',
                        name: '垃圾分类新时尚  最美家庭树新风'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl29.jpg',
                        name: '垃圾分类知识巡展'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl30.jpg',
                        name: '垃圾回收活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl31.jpg',
                        name: '垃圾回收活动（可回收垃圾换蔬菜）'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl32.jpg',
                        name: '垃圾源头减量活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl33.jpg',
                        name: '雷希堃 怀柔镇中心小学'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl34.jpg',
                        name: '卢沟桥乡 争做环保小卫士活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl35.jpg',
                        name: '平谷区妇联童行服务队在金乡东小区开展桶前值守垃圾分类活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl36.jpg',
                        name: '前门街道——大江社区活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl37.jpg',
                        name: '社区书记、居民代表、志愿者、社会组织齐聚一堂，共同讨论垃圾分类工作'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl38.jpg',
                        name: '顺义区“凝聚巾帼力量，助力垃圾分类”为主题的最美家庭“敲门行动”活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl39.jpg',
                        name: '顺义区妇联组织召开“垃圾分类”议事会'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl40.JPG',
                        name: '西城区妇联党建引领 探索六大责任主体 共同做好垃圾分类“关键小事”'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl41.jpg',
                        name: '西城区妇联开展“小手拉大手·垃圾分类‘暑’我行”活动'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fl42.jpg',
                        name: '于若溪  怀柔镇中心小学'
                    },
                ],
                curList:[],
                previews:[],
                startPosition:0,
                previewTitle:'',
                show:false,
            }
        },
        methods:{
            toPreview(list,index){
                this.curList = list
                this.previews = list.map(item=>{return item.img})
                this.startPosition = index
                this.show = true
                this.previewTitle = list[index].name
            },
            onChange(index) {
                this.previewTitle = this.curList[index].name
                this.startPosition = index;
            },
        }
    }
</script>

<style scoped lang="scss">
    .fl-container {
        width: 100%;
        background: #fdf0e9 url(http://shzzpt.org.cn/web/assets/img/funv.png) no-repeat;
        background-size: 100%;
        padding: 250px 24px 20px;
        .fl-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color: #fff;
            padding: 54px 30px;
            &.red {
                background-color: #e2061b;
            }
            .fl-info-title {
                text-align: center;
                color: #e2061b;
                font-size: 38px;
                font-weight: bold;
                &.red {
                    color: #ffffff;
                }
            }
            .fl-info-label {
                color: #e2061b;
                width: 100%;
                font-size: 24px;
                text-align: center;
                padding-top: 10px;
            }
            .fl-info-content {
                color: #7b7b7b;
                font-size: 26px;
                line-height: 35px;
                padding-top: 40px;
                text-indent: 52px;
                text-align: justify;
                &.red {
                    color: #ffffff;
                    text-align: center;
                }
            }
            .fl-info-tag {
                width: 100%;
                height: 45px;
                background-color: #ffeade;
                margin-top: 35px;
                > div {
                    width: max-content;
                    height: 45px;
                    background-color: #e2061b;
                    line-height: 45px;
                    font-size: 22px;
                    color: #FFFFFF;
                    font-weight: bold;
                    padding: 0 15px;
                }
            }
            .fl-info-name {
                text-align: center;
                font-size: 28px;
                color: #333333;
                margin-top: 20px;
                &.red {
                    color: #e40d1d;
                    font-weight: bold;
                }
            }
            .fl-info-video {
                width: 100%;
                margin-top: 20px;
            }
            .fl-book-title {
                width: 100%;
                height: 50px;
                border-top: solid 1px #f8e4d9;
                margin-top: 20px;
                > span {
                    display: block;
                    width: max-content;
                    height: 50px;
                    line-height: 50px;
                    font-size: 26px;
                    color: #333333;
                    font-weight: bold;
                    border-top: solid 6px #e2061b;
                }
            }
            .fl-book-list {
                width: 100%;
                margin-top: 20px;
                .book-img-more {
                    width: 100%;
                    text-align: center;
                    padding: 10px;
                    font-size: 22px;
                    color: #fae6e6;
                }
                .book-img {
                    width: 100%;
                    overflow-y: scroll;
                }
                .book-container-x {
                    display: flex;
                    flex-direction: column;
                    overflow-x: scroll;
                    height: 450px;
                    > img {
                        width: 100%;
                    }
                }
                .book-container {
                    display: flex;
                    flex-direction: row;
                    overflow-y: scroll;
                    > img {
                        width: 100%;
                    }
                }
            }
            .fl-video {
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                .video-content {
                    width: 100%;
                }
                .video-preview {
                    margin-top: 12px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    overflow-y: scroll;
                    .preview-container {
                        width: 267px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 12px;
                        &:first-child {
                            margin-left: 0;
                        }
                        .preview-image {
                            width: 267px;
                            height: 157px;
                            position: relative;
                            > img {
                                width: 100%;
                                height: 100%;
                            }
                            &.active {
                                border: 4px solid #d50000;
                                &::before {
                                    position: absolute;
                                    content: '正在播放';
                                    width: 100%;
                                    height: 100%;
                                    line-height: 155px;
                                    text-align: center;
                                    color: #ffffff;
                                    background-color: #99999955;
                                    z-index: 333;
                                }
                            }
                        }
                        .preview-title {
                            font-size: 26px;
                            color: #333333;
                            font-weight: bold;
                            margin-top: 10px;
                        }
                        .preview-content {
                            font-size: 22px;
                            color: #333333;
                        }
                    }

                }
            }
            .fc-list{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
                justify-content: space-between;
                .fc-item{
                    width: 310px;
                    margin-top: 20px;
                    .fc-img{
                        width: 310px;
                        height: 205px;
                    }
                    .fc-title{
                        width: 100%;
                        color: #000000;
                        font-size: 24px;
                        height: 35px;
                        line-height: 35px;
                        text-align: center;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>