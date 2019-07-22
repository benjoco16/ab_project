<template>
  <div class="home">
    <slider />
    <div class="container-fluid">
      <nav aria-label="breadcrumb" class="ml-n3 mr-n3">
        <ol class="breadcrumb pl-5 pr-5">
          <div class="container">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </div>
        </ol>
      </nav>

      <!-- Begin first section -->
      <section class="section pl-4 pr-4 pt-4">
        <div class="container">
          <div class="section-title d-inline">
            <div class="row pb-4">
              <div class="col-md-2">
                <h2>Programs</h2>
              </div>
              <div class="col-lg-10">
                <form action="" class="form-inline">
                  <label for="exampleFormControlSelect1" class="mr-4 font-weight-bold">Browse By</label>
                  <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                    <option>Location</option>
                    <option>2</option>
                  </select>

                  <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                    <option>City Name</option>
                    <option>2</option>
                  </select>

                  <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                    <option>Province Name</option>
                    <option>2</option>
                  </select>

                  <button type="submit" class="btn btn-primary">Sort</button>
                </form>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4"
              v-for="program in programs"
              :key="program.id"
            >
              <p class="font-weight-bold text-uppercase">Most Urgent <span class="font-weight-normal muted">{{ program.tag }}</span></p>
              <img :src="program.thumb" alt="thumb" class="img-fluid">
              <h3 class="mt-3 font-weight-bold">{{ program.title }}</h3>
              <small class="text-capitalize font-weight-bold">By organization name <span class="font-weight-normal muted">{{ program.timestamp }}</span></small>
              <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
              <p>{{ program.desc }}</p>
              <h3>50% of Goals Met</h3>
              <a href="javascript:;" class="text-color--primary text-uppercase font-weight-bold">&#x3e;&#x3e; Donate</a>
              <div class="mobile-margin--bottom"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- End first section -->

      <!-- Begin second section -->
      <section class="pl-5 pr-5 pt-4 pb-4 full-width-section section-satin">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Featured Program Champions</h2>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-3 text-center"
              v-for="champion in champions"
              :key="champion.id"
            >
              <img src="@/assets/img/qoute.png" alt="">
              <img :src="champion.img" alt="person-image" class="rounded-circle img-champion d-block mx-auto mt-4 mb-4">
              <p class="font-weight-bold mb-0">{{ champion.name }}</p>
              <p class="mb-3">{{ champion.position }}</p>
              <p class="mb-4">{{ champion.desc }}</p>
              <a href="javascript:;" class="font-weight-bold text-color--secondary text-uppercase">View program here</a>
              <div class="mobile-margin--bottom"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- End second section -->

      <!-- Begin third section -->
      <section class="section pl-5 pr-5 pb-4 pt-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-capitalize">How it works</h2>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-3 text-center" v-for="process in processes" :key="process.id">
              <img :src="process.icon" alt="icon" class="img-process mb-5">
              <p class="font-weight-bold text-capitalize text-size-3 w-3 m-auto">{{ process.name }}</p>
              <div class="mobile-margin--bottom"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- End third section -->

      <!-- Begin fourth section -->
      <section class="pl-5 pr-5 pt-4 mb-5 full-width-section section-grey">
        <div class="container">
          <div class="row">
            <div class="col-md-12 d-flex">
              <h2>News</h2>
              <a href="javascript:;" class="ml-auto text-color--secondary text-uppercase">&#x3e;&#x3e; See all news</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4" v-for="item in news" :key="item.id">
              <p class="font-weight-bold text-uppercase">{{ item.category }}</p>
              <img :src="item.thumb" alt="news-image" class="img-fluid">
              <h3 class="mt-3 font-weight-bold">{{ item.title }}</h3>
              <small class="text-capitalize font-weight-bold">By organization name <span class="font-weight-normal muted">{{ item.timestamp }}</span></small>
              <p>{{ item.desc }}</p>
              <a href="javascript:;" class="text-color--secondary text-uppercase font-weight-bold">&#x3e;&#x3e; Read more</a>
              <div class="mobile-margin--bottom"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- End fourth section -->

      <!-- Begin fifth section -->
      <section class="section footer pl-5 pr-5 pb-4 mb-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6"
              v-for="link in links"
              :key="link.id"
            >
              <div class="footer-img--container">
                <img :src="link.img" alt="links" class="img-fluid">
                <div class="top-left pl-3 pt-3">
                  <h2 class="text-color--white">{{ link.title }}</h2>
                </div>
                <div class="bottom pl-4 pt-3 pr-4 pb-3 text-left">
                  <h3 class="text-color--white">{{ link.desc }}</h3>
                  <a href="javascript:;" class="text-color--secondary text-color--white text-uppercase font-weight-bold">&#x3e;&#x3e; Read more</a>
                </div>
              </div>
              <div class="mobile-margin--bottom"></div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <h2 class="text-uppercase mb-3 text-capitalize">Contact us</h2>
              <div class="row">
                <div class="col-md-6">
                  <h3 class="font-weight-bold">Address:</h3>
                  <p>
                    Morbi quis elit. Cras eu neque at urna feugiat consequat. Cras condimentum est ut nulla. Aenean pulvinar, pede vel elementum tempus, lectus massa dapibus lectus, gravida ultrices leo sapien sit amet elit. Nunc risus ante, vehicula in, euismod sit amet, egestas elementum, ligula. In ultrices. Sed cursus, leo eget cursus tincidunt, urna orci tristique tellus, sed mollis mi nibh id urna. Sed fringilla.
                  </p>
                </div>
                <div class="col-md-6">
                  <h3 class="font-weight-bold">Landline:</h3>
                  <ul class="list-unstyled">
                    <li>+632 987 6554</li>
                    <li>+632 987 6554</li>
                    <li>+632 987 6554</li>
                  </ul>
                  <h3 class="font-weight-bold">Email:</h3>
                  <a href="mailto:Info@angatbuhayportal.ph" target="_blank" class="text-color--primary text-color--black">Info@angatbuhayportal.ph</a>
                </div>
              </div>
              <div class="mobile-margin--bottom"></div>
            </div>
            <div class="col-md-6">
              <h2 class="text-uppercase mb-3 text-capitalize text-color--secondary">Connect with us</h2>
              <div class="d-inline">
                <a href="javascript:;" class="mr-3">
                  <img src="../../assets/img/fb.png" alt="fb" class="img-fluid">
                </a>
                <a href="javascript:;" class="mr-3">
                  <img src="../../assets/img/insta.png" alt="instagram" class="img-fluid">
                </a>
                <a href="javascript:;">
                  <img src="../../assets/img/in.png" alt="linkedin" class="img-fluid">
                </a>
              </div>
              <div class="mobile-margin--bottom"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- End fifth section -->
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider'

export default {
  components: { Slider },
  data () {
    return {
      programs: [
        {
          id: 1,
          tag: 'Women Empowerment',
          thumb: require('../../assets/img/3.jpg'),
          title: 'Maecenas blandit pulvinar purus.',
          timestamp: 'February 10, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 2,
          tag: 'Rural Development',
          thumb: require('../../assets/img/3.jpg'),
          title: 'Aenean vitae sapien. Sed quis risus vel justo lacinia semper.',
          timestamp: 'February 9, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 3,
          tag: 'UNIVERSAL HEALTHCARE',
          thumb: require('../../assets/img/programs/med-mission.jpg'),
          title: 'Nunc purus lectus, ornare id, porttitor non, imperdiet quis.',
          timestamp: 'February 12, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        }
      ],
      champions: [
        {
          id: 1,
          img: require('../../assets/img/testimony/t1.jpg'),
          name: 'Stephanie Ayahao',
          position: 'Tuwali tribe',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        },
        {
          id: 2,
          img: require('../../assets/img/testimony/t2.jpg'),
          name: 'Elisa Bayaya',
          position: 'Siayan Pangkabuhayan Federation of Cooperatives',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        },
        {
          id: 3,
          img: require('../../assets/img/testimony/t3.jpg'),
          name: 'Anna Leah Sarabia',
          position: 'Managing Executive, Gota de Leche',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        },
        {
          id: 4,
          img: require('../../assets/img/testimony/t4.jpg'),
          name: 'Imelda Pante',
          position: 'Public School Teacher',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        }
      ],
      processes: [
        {
          id: 1,
          name: 'Find A Program That Matters To You',
          icon: require('../../assets/img/icon-1.png')
        },
        {
          id: 2,
          name: 'Discover Ways To Support',
          icon: require('../../assets/img/icon-2.png')
        },
        {
          id: 3,
          name: 'Collaborate with Our Communities',
          icon: require('../../assets/img/icon-3.png')
        },
        {
          id: 4,
          name: 'Follow Their Journeys',
          icon: require('../../assets/img/icon-4.png')
        }
      ],
      news: [
        {
          id: 1,
          category: 'Women Empowerment',
          thumb: require('../../assets/img/news/newskid1.jpg'),
          title: 'Maecenas blandit pulvinar purus.',
          timestamp: 'February 10, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 2,
          category: 'Rural Development',
          thumb: require('../../assets/img/news/newsold.jpg'),
          title: 'Aenean vitae sapien. Sed quis risus vel justo lacinia semper.',
          timestamp: 'February 9, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 3,
          category: 'UNIVERSAL HEALTHCARE',
          thumb: require('../../assets/img/news/newssack.jpg'),
          title: 'Nunc purus lectus, ornare id, porttitor non, imperdiet quis.',
          timestamp: 'February 12, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        }
      ],
      links: [
        {
          id: 1,
          title: 'Make an impact',
          img: require('../../assets/img/f1.jpg'),
          desc: 'Aliquam neque risus, posuere eu, rhoncus non, vulputate eu, mi. Vivamus varius odio nec ipsum.'
        },
        {
          id: 2,
          title: 'About us',
          img: require('../../assets/img/f2.jpg'),
          desc: 'Tortor eget tempor commodo, mi dolor tempus nunc, sed aliquet elit dui quis elit.'
        }
      ]
    }
  }
}
</script>
