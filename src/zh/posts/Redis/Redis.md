---
icon: pen-to-square
date: 2022-01-01
copy: false #打开复制权限
category:
  - Redis
tag:
  - 分布式锁

---

# Redisson分布式锁的使用方法

## 下面是使用分布式锁的例子

### 1. 引入依赖
<!--redisson-->
```xml
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson</artifactId>
</dependency>
```

### 2. 配置Bean
```java
@Configuration
 public class RedisConfig {
    @Bean
    public RedissonClient redissonClient() {
        // 配置类
        Config config = new Config();
        // 添加redis地址，这里添加了单点的地址，也可以使用config.useClusterServers()添加集群地址 
        config.useSingleServer()
            .setAddress("redis://192.168.150.101:6379")
            .setPassword("123321");
        // 创建客户端
        return Redisson.create(config);
    }
 }
 ```
### 3. 测试
```java
 
@SpringBootTest(classes = PromotionApplication.class)
public class RedissonTest {
    @Autowired
    private RedissonClient redissonClient;
    @Test
    public void test() throws InterruptedException {
        RLock lock = redissonClient.getLock("anyLock");//可重入锁
 
        //获取锁
        //boolean isLock = lock.tryLock(1, 3, TimeUnit.SECONDS);//参数：等待时间，锁失效时间，时间单位（看门狗机制会失效）
         boolean isLock = lock.tryLock();//不设置参数默认采用看门狗机制,采用默认失效时间30秒
        try {
            if(isLock){
                System.out.println("获取到分布式锁");
            }else {
                System.out.println("没有获取到");
            }
            //通过睡眠 查看看门狗机制是否生效，不能打断点
            TimeUnit.SECONDS.sleep(60);
        }finally {
            //释放锁
            lock.unlock();
        }
    }
}
```
利用Redisson获取锁时可以传3个参数：   
**waitTime** ：获取锁的等待时间。当获取锁失败后可以多次重试，直到waitTime时间耗尽。waitTime默认-1，即失败后立刻返回，不重试。   
**leaseTime** ：锁超时释放时间。默认是30，同时会利用WatchDog来不断更新超时时间。需要注意的是，如果手动设置leaseTime值，会导致WatchDog失效。   
**TimeUnit** ：时间单位   

