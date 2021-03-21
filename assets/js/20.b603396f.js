(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{398:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"mybatis项目创建流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis项目创建流程"}},[t._v("#")]),t._v(" MyBatis项目创建流程")]),t._v(" "),e("h4",{attrs:{id:"一、需求描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、需求描述"}},[t._v("#")]),t._v(" 一、需求描述")]),t._v(" "),e("div",{staticClass:"language-1.根据用户ID查询用户 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t2.根据用户名模糊查询用户\n\t3.添加用户\n\t4.更新用户\n\t5.删除用户\n")])])]),e("h4",{attrs:{id:"二、创建数据库设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、创建数据库设计"}},[t._v("#")]),t._v(" 二、创建数据库设计")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("省略。。。\n")])])]),e("h4",{attrs:{id:"三、搭建开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、搭建开发环境"}},[t._v("#")]),t._v(" 三、搭建开发环境")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.创建Maven项目\n\t2.设置pom.xml\t分别导入mybatis、数据库和日志的jar包\n\t3.创建Mybatis的全局配置文件SqlMapConfig.xml\n\t\t3.1读取数据库db.properties信息\n\t\t3.2管理数据库连接池dataSource\n\t\t3.3加载映射文件mappers\n\t4.创建映射文件userInfo.xml\n\t5.创建日志文件\n")])])]),e("h3",{attrs:{id:"章节一-走进mybatis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#章节一-走进mybatis"}},[t._v("#")]),t._v(" 章节一：走进MyBatis")]),t._v(" "),e("h4",{attrs:{id:"任务1-根据用户id查询用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务1-根据用户id查询用户"}},[t._v("#")]),t._v(" 任务1：根据用户id查询用户")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\t1.在Model包下创建POJO类UserInfoModel\n​\t2.在userInfo.xml中配置SQL映射\n​\t\t2.1根据id查询用户：id="findUserInfoById"\n​\t3.在test包中创建单元测试类Testshop\n​\t\t3.1定义会话工厂对象\n​\t\t3.2声明@Before注解在setUp方法中：加载SqlMapConfig.xml配置文件\n​\t\t3.3在setUp方法中：创建会话工厂，传入mybatis的配置文件信息\n​\t\t3.4在testFindUserInfoById方法：通过会话工厂得到SqlSession对象\n​\t\t3.5通过sqlSession.selectOne查询单条记录\n​\t\t3.6关闭SQLSession对象\n​\t4.运行打印单元测试，输出日志信息。\n')])])]),e("h4",{attrs:{id:"任务2-根据用户名模糊查询用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务2-根据用户名模糊查询用户"}},[t._v("#")]),t._v(" 任务2：根据用户名模糊查询用户")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t1.创建映射声明ID,修改输入类型和sql语句\n​\t2.编写单元测试\n​\t\t2.1获取sqlSession对象\n​\t\t2.2通过sqlSession.selectList查询模糊用户\n​\t\t2.3关闭对象SQLSession\n​\t3.运行打印\n")])])]),e("h4",{attrs:{id:"任务3-添加用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务3-添加用户"}},[t._v("#")]),t._v(" 任务3：添加用户")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.创建映射声明ID\n​\t\t1.1userInfo.xml中编写<insert>标签\n​\t\t1.2将新增记录的主键值保存到userInfo对象中\n​\t\t1.3编写插入语句insert\n​\t2.编写单元测试\n​\t\t1.获取SQLSession对象\n​\t\t2.new一个UserInfoModel类的对象model\n​\t\t3.model.set方法插入用户对象\n​\t\t4.SQLSession.insert执行插入\n​\t\t5.提交事务\n​\t\t6.获取用户信息主键\n​\t\t7.关闭会话\n​\t3.单元测试打印结果\n")])])]),e("h4",{attrs:{id:"任务4-uuid主键策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务4-uuid主键策略"}},[t._v("#")]),t._v(" 任务4：UUID主键策略")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t1.使用mysql的uuid()作为新增记录的主键值，uuid()能够生成长度为36位的永远不重复的字符串，避免了自增长主键值能被猜测的缺陷\n​\t2.通过select uuid()得到uuid字符串，将uuid字符串设置到userInfo对象的属性中，\n​\t3.在执行insert时，从userInfo对象中取出id的值\n")])])]),e("h4",{attrs:{id:"任务5-更新用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务5-更新用户"}},[t._v("#")]),t._v(" 任务5：更新用户")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t1.创建映射声明ID\n​\t2.编写update语句\n​\t3.编写单元测试\n​\t\t3.1获取SQLSession对象\n​\t\t3.2插入用户对象\n​\t\t3.3执行sqlSession.update方法\n​\t\t3.4提交事务\n​\t\t3.5关闭会话\n​\t4.运行打印结果\n")])])]),e("h4",{attrs:{id:"任务6-删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务6-删除用户"}},[t._v("#")]),t._v(" 任务6：删除用户")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t1.创建映射声明ID\n​\t2.delete语句\n​\t3.单元测试类\n​\t\t3.1获取SQLSession对象\n​\t\t3.2执行SQLSession.delete方法\n​\t\t3.3提交事务\n​\t\t3.4关闭会话\n​\t4.打印结果\n")])])]),e("h3",{attrs:{id:"章节二-dao的开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#章节二-dao的开发"}},[t._v("#")]),t._v(" 章节二 Dao的开发")]),t._v(" "),e("h4",{attrs:{id:"简介-mybatis有两种方法开发dao-即原生dao开发和mapper接口开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介-mybatis有两种方法开发dao-即原生dao开发和mapper接口开发"}},[t._v("#")]),t._v(" 简介：Mybatis有两种方法开发dao,即原生dao开发和Mapper接口开发")]),t._v(" "),e("h4",{attrs:{id:"一、原生dao开发步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、原生dao开发步骤"}},[t._v("#")]),t._v(" 一、原生Dao开发步骤")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n\n​\t1.给定需求：\n​\t\t任务1：实现用户id查询用户信息\n​\t\t任务2：查询所有用户\n​\t\t任务3：实现用户注册业务\n​\t2.在dao包下创建dao接口IUserInfoDao\n​\t\t2.1findByUserId()方法：根据主键查询用户\n​\t\t2.2insertUserInfo()方法：添加用户\n​\t3.创建dao实现类\n​\t\t3.1在impl包下创建dao接口实现类UserInfoDaoImpl\n​\t\t3.2定义会话工厂对象，该对象从外包部通过构造函数注入\n​\t\t3.3findUserInfoById()方法\n​\t\t\t3.3.1通过会话工厂获取SQLSession对象\n​\t\t\t3.3.2执行单条查询\n​\t\t\t3.3.3关闭会话\n​\t\t\t3.3.4返回查询结果\n​\t\t3.4insertUserInfo()方法：\n​\t\t\t3.4.1获取SQLSession对象\n​\t\t\t3.4.2执行添加方法\n​\t\t\t3.4.3提交事务\n​\t\t\t3.4.5获取用户主键信息\n​\t\t\t3.4.6关闭会话\n​\t4.单元测试\n​\t\t 1.在test包下创建单元测试类TestDao\n​\t\t\t1.1定义会话工厂对象sqlSessionFactory\n​\t\t\t1.2注解@Before在setUp()方法：\n​\t\t\t\t1.2.1加载配置文件SqlMapConfig.xml\n​\t\t\t\t1.2.2InputStream获取\n​\t\t\t\t1.2.3创建会话工厂，传入mybatis的配置文件信息\n​\t\t\t\t1.2.4测试根据用户Id查询用户信息\n​\t\t\t\t1.2.5注解@Test在testFindUserInfoById()方法：\n​\t\t\t\t\t1.2.5.1向dao注入sqlSessionFactory\n​\t\t\t\t\t1.2.5.2执行userInfoDao.findUserInfoById()方法，返回model对象\n​\t\t\t\t\t1.2.5.3打印model对象\n​\t\t\t\t1.2.6测试用户注册业务，注解@Test在testInsertUser()方法：\n​\t\t\t\t\t1.2.6.1向dao注入sqlSessionFactory对象\n​\t\t\t\t\t1.2.6.2new一个model对象，set方法添加\n​\t\t\t\t\t1.2.6.3执行userInfo.insertUserInfo()方法。\n")])])]),e("h4",{attrs:{id:"二、mapper接口开发dao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、mapper接口开发dao"}},[t._v("#")]),t._v(" 二、Mapper接口开发dao")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.原理：Mapper接口（相当于dao接口），动态代理对象（相当于dao实现类）\n\t\t1.1定义Mapper.xml映射文件，文件名可自定义，建议表名称+Mapper结尾\n\t\t1.2定义Mapper接口，建议表名称+Mapper作为接口名\n\t2.定义Mapper.xml\n\t\t2.1在src/main/resoures目录下创建userinfoMapper.xml映射文件\n\t\t2.2\x3c!--规范1：namespace等于mapper接口路径 --\x3e\n\t\t2.3\x3c!--规范2：id的值必须和mapper接口中的方法名称相同  --\x3e\n\t\t2.4\x3c!--规范3：paramterType的类型必须与mapper接口方法的输入参数类型相同  --\x3e\n\t\t2.5\x3c!--规范4：resultType的类型必须与mapper接口方法的返回值类型相同  --\x3e\n\t3.将userinfoMapper.xml加载到SqlMapConfig.xml配置文件中\n\t4.定义Mapper接口\n\t\t4.1在src/main/java中创建包mapper,在该包下创建IUserInfoMapper接口，编写与映射声明id同名的方法\n\t\t4.2单元测试\n\t\t\t4.2.1创建TestMapper类\n\t\t\t4.2.2定义会话工厂\n\t\t\t4.2.3setUp()方法：加载Mybaits配置文件\n\t\t\t4.2.4创建会话工厂，传入配置文件信息\n\t\t\t4.2.5testFindUserInfoById方法：\n\t\t\t4.2.6获取SQLSession对象\n\t\t\t4.2.7创建IuserInfoMapper对象，自动生成IUserInfoMapper的代理对象\n\t\t\t4.2.8执行单个查询方法\n\t\t\t4.2.9关闭SQLSession\n\t\t\t4.2.10打印结果\n\t\t\t4.2.11剩余test方法类似\n")])])]),e("h3",{attrs:{id:"章节三-mybatis配置详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#章节三-mybatis配置详解"}},[t._v("#")]),t._v(" 章节三 MyBatis配置详解")]),t._v(" "),e("h4",{attrs:{id:"一、全局配置sqlmapconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、全局配置sqlmapconfig"}},[t._v("#")]),t._v(" 一、全局配置SqlMapConfig")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('1.配置内容和顺序（顺序固定，不能更改）\n​\t\t1.1properties(属性）\n​\t\t1.2settings(全局配置参数)\n​\t\t1.3typeAliases(类型别名）\n​\t\t1.4typeHandlers(类型处理器）\n​\t\t1.5objectFactory(对象工厂）\n​\t\t1.6plugins(插件）\n​\t\t1.7environments(环境集合属性对象）\n​\t\t\t1.8environment(环境子属性对象)\n​\t\t\t1.9transactionManager(事务管理）\n​\t\t\t1.10dataSource(数据源）\n​\t\t1.11mappers(映射器）\n​\t\n\n2.内容详解\n\t\t2.1properties(属性)：可以加载数据库配置信息，通过外部配置来方便动态替换。\n\t\t2.2settings(全局配置): settings是mybatis的全局配置参数，它是 MyBatis 中极为重要的调整设置，它们会改变 MyBatis 的运行时行为。\n\t\t2.3具体设置参数参考地址：\n\t\t\thttps://blog.csdn.net/weixin_39805338/article/details/80893558\n\t\t2.4typeAliases(类型别名): 类型别名是为 Java 类型设置一个短的名字。它只和 XML 配置有关，存在的意义仅在于用来减少类完全限定名的冗余。\n           2.4.1针对POJO类型需要自定义别名：\n           \t\t2.4.1.1单个定义别名\n\t\t\t\t<typeAlias alias="userInfoModel" type="cn.itlaobing.mybatis.model.UserInfoModel" />\n\t\t\t\t2.4.1.2批量定义别名，扫描整个包下的类，别名为类名（首字母大小写都可以）\n\t\t\t\t<package name="cn.itlaobing.mybatis.model" />\n\t\t2.5typeHandlers(类型处理器)：无论是 MyBatis 在预处理语句（PreparedStatement）中设置一个参数时，还是从结果集中取出一个值时， 都会用类型处理器将获取的值以合适的方式转换成 Java 类型。Mybatis提供的typeHandlers已经满足大部分开发需求，通常开发人员不需要自定义typeHandlers。\n\t\t2.6objectFactory（对象工厂）：MyBatis 每次创建结果对象的新实例时，它都会使用一个对象工厂（ObjectFactory）实例来完成。\n\t\t2.7plugins（插件）：MyBatis 允许你在已映射语句执行过程中的某一点进行拦截调用。\n\t\t2.8environments（配置环境）：MyBatis 可以配置成适应多种环境，这种机制有助于将 SQL 映射应用于多种数据库之中， 现实情况下有多种理由需要这么做。例如，开发、测试和生产环境需要有不同的配置；或者共享相同 Schema 的多个生产数据库， 想使用相同的 SQL 映射。许多类似的用例。\n\t\t2.9transactionManager（事务管理器）：在 MyBatis 中有两种类型的事务管理器（也就是 type=”[JDBC|MANAGED]”）\n\t\t2.10dataSource（数据源）：dataSource 元素使用标准的 JDBC 数据源接口来配置 JDBC 连接对象的资源。\n\t\t2.11mappers（映射器）：mappers用于加载映射文件到全局配置文件中，Mybatis有四种加载配置文件的方法。分别是resource、url、class、package。其中resource方法一次加载一个映射文件，package方法可以实现批量加载，推荐使用。\n')])])]),e("h4",{attrs:{id:"二、输入映射parametertype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、输入映射parametertype"}},[t._v("#")]),t._v(" 二、输入映射parameterType")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Myabtis输入映射就是将java对象映射为SQL语句中列的值。\n输入映射形式包括：简单类型、POJO类型、VO类型、HashMap类型。\n\n1.\t简单类型：比如需求：根据id查询指定的用户\n   1.1mapper映射配置（int)\n   1.2mapper接口定义(int)\n   1.3单元测试\n   1.4运行打印\n2.\tPOJO类型：比如需求：添加用户\n   2.1mapper映射配置(UserInfoModel)\n   2.2mapper接口定义(UserInfoModel)\n   2.3单元测试\n   2.4打印运行\n3.\tVO类型：它的作用是把某个指定页面的所有数据封装起来，一个VO对象中可以对应数据库中的多张表。PO是持久对象，PO类与表对应，PO类中的属性与表的列对应。比如需求：多条件查询用户。\n   3.1创建OrdersModel类\n   3.2创建UserInfoQueryVO类\n   \t3.2.1UserInfoModel的PO作为VO的属性\n   \t3.2.2OrderModel的PO作为VO的属性\n   3.3配置Mapper映射文件（UserInfoQueryVO)\n   3.4定义Mapper接口（UserInfoQueryVO)\n   3.5单元测试\n   3.6打印运行\n4.\tHashMap类型：比如需求：根据用户名和性别查询用户\n   4.1Mapper映射配置(HashMap)\n   4.2Mapper接口定义(HashMap)\n   4.3单元测试\n   4.4打印运行\n")])])]),e("h4",{attrs:{id:"三、输出映射resulttype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、输出映射resulttype"}},[t._v("#")]),t._v(" 三、输出映射resultType")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("注意：POJO（Plain Ordinary Java Object）即普通Java类，具有一部分getter/setter方法的那种类就可以称作POJO。\nMybatis的输出映射就是将查询的结果映射为java对象。resultType可以把查询结果封装到pojo类型中，但必须pojo类的属性名和查询到的数据库表的字段名一致。\n\n1.\t简单类型输出映射：需求：查询userInfo表的记录数量\n   1.1Mapper映射配置（int)\n   1.2Mapper接口定义(int)\n   1.3单元测试\n   1.4运行打印\n2.\tPOJO对象输出映射：需求：根据id查询指定用户\n   2.1Mapper映射配置（UserInfoModel)\n   2.2Mapper接口定义（UserInfoModel)\n   2.3单元测试\n   2.4打印运行\n3.\tPOJO集合输出映射：需求：查询所有用户\n   3.1Mapper映射配置（UserInfoModel)\n   3.2Mapper接口定义（List<UserInfoModel>)\n   3.3单元测试\n   3.4打印运行\n4.\tHashMap类型输出映射：需求：查询所有用户\n   4.1Mapper映射配置（hasMap)\n   4.2Mapper接口定义(List<hasMap<String,String>>)\n   4.3单元测试\n   4.4打印运行\n")])])]),e("h4",{attrs:{id:"四、输出映射resultmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、输出映射resultmap"}},[t._v("#")]),t._v(" 四、输出映射resultMap")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("如果出现字段和属性不一致，则需要手动配置映射方式，这时使用resultMap。比如列名是“user_id”,而属性名是“userId”。\n注意：resultMap和resultType不能同时存在。另外还有resultMap 元素，它是 MyBatis 中最重要最强大的元素，它能提供级联查询，缓存等功能。\n4.1标签和属性分析：\n\tresultMap的id属性是它的唯一标识，是映射的POJO类\n\t<id>标签映射主键，<result>标签映射非主键\n\tproperty设置POJO的属性名称，column映射查询结果的列名称\n4.2定义resultMap:\n\t4.2.1需求：查询所有用户\n\t4.2.2定义resultMap\n\t4.2.3使用resultMap\n\t4.2.4Mapper接口定义\n\t4.2.5单元测试\n")])])]),e("h4",{attrs:{id:"五、动态sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、动态sql"}},[t._v("#")]),t._v(" 五、动态SQL")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\t定义：是指通过Mybatist提供的各种标签实现动态拼接SQL语句。\n   1.1\twhere if:需求：多条件查询\n   1.2\tforeach:批量删除用户\n   1.2.1collection属性：表示被迭代的数组或集合\n   1.2.2item:表示被迭代的数组或集合中的每一个元素\n   1.2.3open:表示遍历前拼接的字符串\n   1.2.4separator:表示每个元素后的分隔符\n   1.2.5close：表示遍历后拼接的字符串\n   1.3\tSql片段：是指将重复的Sql提取出来，进行单独定义的节点。使用时用include引用Sql片段即可，最终达到Sql片段重用的目的。\n")])])]),e("h3",{attrs:{id:"章节四-关联查询与缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#章节四-关联查询与缓存"}},[t._v("#")]),t._v(" 章节四 关联查询与缓存")]),t._v(" "),e("h4",{attrs:{id:"关联查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联查询"}},[t._v("#")]),t._v(" 关联查询")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 表与表之间存在三种关系：分别是一对一、一对多、多对多。\n\n2. 关联查询：指在查询某张表数据的同时也查询与该表关联表中的数据。\n\n3. 缓存：指将已经查询出的对象缓存在内存中，再次查询该对象时从内存中直接获取，不再从数据库获取，从而提高程序的运行效率。\n\n4. 一对一关联查询：给出需求：查询所有订单分别是哪些顾客订购的。\n\n5. 有两种方法创建用于视图的VO类，一种是使用扩展列的VO类，另一种是使用扩展实体的POJO类。\n\n   5.1方法一：\n   \t\t5.1.1定义VO类：VO中的userInfo属性从父类继承，VO中的订单信息是类中的扩展列\n   \t\t5.1.2Mapper映射配置（一对一查询，使用resultType实现）\n   \t\t5.1.3Mapper接口定义\n   \t\t5.1.4单元测试\n   \t\t5.1.5打印运行\n   5.2方法二：\n   \t\t5.2.1定义VO类OrdersVo:将UserInfoModel类的对象作为OrdersModel类的属性， UserInfoModel类的对象用于存储订单的用户信息。\n   \t\t5.2.2Mapper映射配置（一对一查询，使用resultMap实现）\n   \t\t5.2.3定义resultMap：\n   \t\t\t5.2.3.1订单信息\n   \t\t\t5.2.3.2用户信息（使用assciation作用：当一个实体类封装另一个实体类时，就需要它，并且只能一对一使用\n   \t\t5.2.4Mapper接口定义\n   \t\t5.2.5单元测试\n   \t\t5.2.6打印运行\n\n6. 一对多关联查询：需求：查询订单及其订单明细和订单用户\n\n   6.1给出需求：查询订单及其订单明细和订单用户\n   6.2需求分析：一个订单可以购买多个商品，因此订单与商品之间是一对多的关系。\n   6.3步骤：\n\n   ​\t6.3.1定义POJO类\n   ​\t\t6.3.2Mapper映射配置（一对多）\n   ​\t\t6.3.3resultMap定义：\n   ​\t\t\t6.3.3.1extends:实现订单信息和用户信息从OrderAndUserInfoResultMap继承；\n   ​\t\t\t6.3.3.2collection：对关联查询到多条记录映射到一个list集合对象中（一对多使用）\n   ​\t\t\t6.3.3.3ofType:指定映射到list集合属性中pojo类型\n   ​\t\t6.3.4Mapper接口定义\n   ​\t\t6.3.5单元测试\n   ​\t\t6.3.6打印运行\n\n测试结果表明：一对多查询先于一对一查询执行打印出来。问题：为什么orderdetailModel不能改为orderdetailModels?其他却可以改？\n自己测试总结：private List<OrderdetailModel> orderdetailModel=null;代码中OrderdetailModel不能加s,否则编译错误，orderdetailModel也不行，否则找不到getting方法。\n\n7. 多对多关联查询：需求：查询用户和用户购买的商品\n\n7.1需求：查询用户和用户购买的商品\n\t7.2需求分析：由于用户有多个，商品也有多个，用户与商品之间形成多对多的关系。\n\t7.3步骤：\n\t\t7.3.1定义POJO类UserInfoModel,封装OrdersModel类\n\t\t7.3.2定义OrdersModel类，封装UserInfoModel类和OrderdetailModel类\n\t\t7.3.3定义OrderdetailModel类，封装GoodsModel类\n\t\t7.3.4定义GoodsModel类\n\t\t7.3.5userinfoMapper.xml映射配置findUserAndGoods\n\t\t7.3.6resultMap定义UserAndGoodsResultMap\n\t\t7.3.7IUserInfoMapper接口定义findUserAndGoods方法\n\t\t7.3.8TestFindOrderAndOrderDetail.java单元测试\n\t\t7.3.9打印运行\n\n补充：级联的优点是获取关联数据十分方便，但是级联过多会增加数据库系统的复杂度，同时降低系统的性能。如果表 A 中有一个外键引用了表 B 的主键，A 表就是子表，B 表就是父表。当查询表 A 的数据时，通过表 A 的外键将表 B 的相关记录返回，这就是级联查询。例如，当查询一个人的信息时，同时根据外键（身份证号）将他的身份证信息返回。\n")])])]),e("h4",{attrs:{id:"关联查询总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联查询总结"}},[t._v("#")]),t._v(" 关联查询总结")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\tresultType:\n   作用：将查询结果按照sql列名和pojo属性名一致性映射到pojo中。\n   场合：常见一些明细记录的展示，比如用户购买商品明细，将关联查询信息全部展示在页面时，此时可直接使用resultType将每一条记录映射到pojo中，在前端页面遍历list（list中是pojo）即可。\n2.\tresultMap:\n   联合查询必须用resultMap，它可以使用association（联合）和 collection（集合）完成一对一和一对多高级映射。\n   2.1 association：\n   2.1.1作用：\n   \t实现一对一关联查询。将关联查询信息映射到一个pojo对象中。\n   2.1.2场合：\n   \t为了方便查询关联信息可以使用association将关联订单信息映射为用户对象的pojo属性中，比如：查询订单及关联用户信息。\n\n使用resultType无法将查询结果映射到pojo对象的pojo属性中，根据对结果集查询遍历的需要选择使用resultType还是resultMap。\n\n2.2collection：\n\n2.2.1作用：\n         实现一对多或多对多关联查询。将关联查询信息映射到一个list集合中。\n2.2.2场合：\n         为了方便查询遍历关联信息可以使用collection将关联信息映射到list集合中，比如：查询用户权限范围模块及模块下的菜单，可使用collection将模块映射到模块list中，将菜单列表映射到模块对象的菜单list属性中，这样的作的目的也是方便对查询结果集进行遍历查询。\n\t\t如果使用resultType无法将查询结果映射到list集合中。\n\n总结两者：\nresultMap可以实现延迟加载，resultType无法实现延迟加载。\nresultMap使用association和collection分别完成一对一和一对多高级映射（对结果有特殊的映射要求）。\n\njdbc问题总结如下：\n1、数据库连接创建、释放频繁造成系统资源浪费，从而影响系统性能。如果使用数据库连接池可解决此问题。\n2、Sql语句在代码中硬编码，造成代码不易维护，实际应用中sql变化的可能较大，sql变动需要改变java代码。\n3、使用preparedStatement向占有位符号传参数存在硬编码，因为sql语句的where条件不一定，可能多也可能少，修改sql还要修改代码，系统不易维护。\n4、对结果集解析存在硬编码（查询列名），sql变化导致解析代码变化，系统不易维护，如果能将数据库记录封装成pojo对象解析比较方便。\n\nMybatis解决jdbc编程的问题\n1、数据库连接创建、释放频繁造成系统资源浪费从而影响系统性能，如果使用数据库连接池可解决此问题。\n解决：在SqlMapConfig.xml中配置数据连接池，使用连接池管理数据库链接。\n2、Sql语句写在代码中造成代码不易维护，实际应用sql变化的可能较大，sql变动需要改变java代码。\n解决：将Sql语句配置在XXXXmapper.xml文件中与java代码分离。\n3、向sql语句传参数麻烦，因为sql语句的where条件不一定，可能多也可能少，占位符需要和参数一一对应。\n解决：Mybatis自动将java对象映射至sql语句，通过statement中的parameterType定义输入参数的类型。\n4、对结果集解析麻烦，sql变化导致解析代码变化，且解析前需要遍历，如果能将数据库记录封装成pojo对象解析比较方便。\n解决：Mybatis自动将sql执行结果映射至java对象，通过statement中的resultType定义输出结果的类型。\n")])])]),e("h4",{attrs:{id:"懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.\t懒加载定义：MyBatis中的延迟加载，也称为懒加载，是指在进行表的关联查询时，使用Mybatis的懒加载特性可有效的减少数据库的压力。例如在进行一对多查询的时候，只查询出一方，当程序中需要多方的数据时，mybatis再发出sql语句进行查询，这样子延迟加载就可以的减少数据库压力。\n   Mybatis一对一关联的association和一对多的collection可以实现懒加载。懒加载时要使用resultMap，不能使用resultType。\n\n2.\t启动懒加载：\n   Mybatis默认没有打开懒加载配置，需要在SqlMapperConfig.xml中通过settings配置lazyLoadingEnabled、aggressiveLazyLoading来开启懒加载。\n\n3.\t懒加载总结：\n   3.1作用：\n   \t当需要查询关联信息时再去数据库查询，默认不去关联查询，提高数据库性能。\n   \t只有使用resultMap支持懒加载设置。\n   3.2使用场合：\n   \t当只有部分记录需要关联查询其它表的记录时，此时可按需延迟加载，需要关联查询时再向数据库发出sql，以提高数据库性能。\n   \t当全部需要关联查询信息时，此时不用懒加载，直接将关联查询信息全部返回即可，可使用resultType或resultMap完成映射。\n   3.3配置方法:\n   \tCollection和association都需要配置select和column属性。\n   \t两者配置方法相同。\n")])])]),e("h3",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),e("h4",{attrs:{id:"一、为什么使用缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么使用缓存"}},[t._v("#")]),t._v(" 一、为什么使用缓存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.作用：为了减去数据库的压力，提高数据库的性能。缓存是使用Map集合缓存数据的。\n\n2.MyBatis 的缓存分为一级缓存和二级缓存。\n\t一级缓存是 SqlSession 级别的缓存\n\t二级缓存是 mapper 级别的缓存，多个 SqlSession 共享\n\t一级缓存的作用域是同一个SQLSession\n\t二级缓存的作用域是Mapper的同一个namespace\n\tMybtais默认开启一级缓存，二级缓存需要在settings全局参数中配置开启。\n")])])]),e("h4",{attrs:{id:"二、一级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、一级缓存"}},[t._v("#")]),t._v(" 二、一级缓存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("一级缓存是 SqlSession 级别的缓存，是基于 HashMap 的本地缓存。当同一个 SqlSession 执行两次相同的 sql 语句时，第一次执行完后会将数据库中查询的数据写到缓存，第二次查询时直接从缓存获取不用去数据库查询。不同的 SqlSession 之间的缓存数据区域互不影响。\n\tMybatis内部存储缓存使用一个HashMap缓存数据，key为hashCode+sqlId+Sql语句。Value为从查询出来映射生成的java对象。\n\t当 SqlSession 执行 insert、update、delete 操作并commit提交到数据库后会清空缓存区域，保证缓存中的信息是最新的。防止后续查询发生脏读（脏读：查询到过期的数据）。\n")])])]),e("h4",{attrs:{id:"三、二级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、二级缓存"}},[t._v("#")]),t._v(" 三、二级缓存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('二级缓存是 mapper 级别的缓存，同样是基于 HashMap 进行存储，多个 SqlSession 可以共用二级缓存，其作用域是 mapper 的同一个 namespace。不同的 SqlSession 两次执行相同的 namespace 下的 sql 语句，会执行相同的 sql，第二次查询只会查询第一次查询时读取数据库后写到缓存的数据，不会再去数据库查询。\n\tMybatis内部存储缓存使用一个HashMap缓存数据，key为hashCode+sqlId+Sql语句。Value为从查询出来映射生成的java对象。\n\t当 SqlSession 执行 insert、update、delete 操作并commit提交到数据库后会清空缓存区域，保证缓存中的信息是最新的。防止后续查询发生脏读（脏读：查询到过期的数据）。\n\n配置二级缓存：\n第一步：在SqlMapperConfig.xml中启用二级缓存：\n<setting name="cacheEnabled" value="true"/>\n第二步：POJO序列化，将所有POJO类实现序列化接口。\n第三步：在配置映射文件中添加<cache/>,表示此mapper开启二级缓存\n')])])]),e("h4",{attrs:{id:"四、禁用二级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、禁用二级缓存"}},[t._v("#")]),t._v(" 四、禁用二级缓存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('useCache="false":表示禁用二级缓存，每次查询都会发出sql去查询，默认情况是true.\n')])])]),e("h4",{attrs:{id:"五、刷新缓存-清空缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、刷新缓存-清空缓存"}},[t._v("#")]),t._v(" 五、刷新缓存（清空缓存）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("在mapper的同一个namespace中，如果有其它insert、update、delete操作数据后需要刷新缓存，设置fulshCache=”true”属性即可刷新缓存，默认是true.\n")])])]),e("h4",{attrs:{id:"六、缓存总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、缓存总结"}},[t._v("#")]),t._v(" 六、缓存总结")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("对于访问多的查询请求且用户对查询结果实时性不高时采用二级缓存技术降低数据库访问量，提高访问速度。例如耗时较高的统计分析sql。通过设置flushnternal（时间间隔），让其每隔一段时间自动清空缓存，比如设置为60分钟，24小时等。\n对于实时性要求较高的查询不能使用缓存，例如股票行情。\n")])])]),e("h4",{attrs:{id:"七、逆向工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、逆向工程"}},[t._v("#")]),t._v(" 七、逆向工程")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.定义：逆向工程是指根据数据库生成java代码，正向工程是指根据java代码生成数据库。\n\tMyBatis一个主要的特点就是需要程序员自己编写SQL，那么如果表太多的话，难免会很麻烦，所以MyBatis官方提供了一个逆向工程，可以针对单表自动生成MyBatis执行所需要的代码（包括po类，mapper.xml映射文件和Mapper接口等）。一般在实际开发中，常用的逆向工程方式是通过数据库的表生成代码。\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);