<template>
  <div class="community-item">
    <item-slider />
    <div class="container-fluid">
      <nav aria-label="breadcrumb" class="ml-n3 mr-n3">
        <ol class="breadcrumb pl-5 pr-5">
          <li class="breadcrumb-item" aria-current="page">Home</li>
          <li class="breadcrumb-item" aria-current="page">Our Communities</li>
          <li class="breadcrumb-item active" aria-current="page">LGU name</li>
        </ol>
      </nav>
      <!-- Begin first section -->
      <section class="section pl-4 pr-4 pt-4 pb-4 mb-5">
        <div class="row">
          <div class="col-md-3">
            <img src="../../assets/img/c3.jpg" alt="lgu name" class="img-fluid rounded-circle">
          </div>
          <div class="col-md-9">
            <p class="font-weight-bold text-uppercase">Category</p>
            <h2 class="text-color--black">LGU Name</h2>
            <p class="font-weight-bold mb-1">
              Joined <span class="muted">February 7, 2019</span>
            </p>
            <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
            <p>
              LGU description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue. Nunc ut lectus ac justo pretium iaculis. In id lectus eu diam aliquam rutrum. Ut sit amet arcu non urna venenatis consectetuer. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ex recusandae magnam itaque libero excepturi consequuntur aliquid expedita eligendi illo dolores amet, eius, necessitatibus iste optio saepe asperiores, qui nesciunt.</p>
          </div>
        </div>
      </section>
      <!-- End first section -->
      <!-- Begin second section -->
      <section class="pl-5 pr-5 pt-4 pb-4 full-width-section section-ice">
        <div class="row">
          <div class="col-md-12">
            <h2>Program Champions</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-3 text-center"
            v-for="champion in champions"
            :key="champion.id"
          >
            <img :src="champion.img" alt="person-image" class="rounded-circle img-champion d-block mx-auto mt-4 mb-4">
            <p class="font-weight-bold mb-0">{{ champion.name }}</p>
            <p class="mb-3">{{ champion.position }}</p>
            <p class="mb-4">{{ champion.desc }}</p>
            <div class="mobile-margin--bottom"></div>
          </div>
        </div>
      </section>
      <!-- End second section -->
      <!-- Begin third section -->
      <section class="section pl-4 pr-4 pt-4 pb-4 mb-5">
        <h2 class="mb-3">About LGU Name</h2>
        <div class="row">
          <div class="col-md-6">
            <img src="../../assets/img/4.jpg" alt="Lgu name" class="img-fluid">
            <div class="mobile-margin--bottom"></div>
          </div>
          <div class="col-md-6">
            <p class="font-weight-bold text-size-3">Section Title</p>
            <p class="text-size-2">
              Subhead Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aspernatur nulla inventore praesentium dicta quis facilis error tempora alias voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, neque illum? Atque culpa optio excepturi ea rem exercitationem, ducimus vitae tenetur assumenda magnam voluptatibus at minima veniam cupiditate minus eligendi accusantium, aut explicabo. Dicta laboriosam minus pariatur non error praesentium?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui odio eveniet ratione est dolores magnam vitae dignissimos impedit architecto, rem praesentium quisquam tempora obcaecati pariatur distinctio eaque culpa facilis delectus, nihil laboriosam necessitatibus! Possimus quaerat aliquam modi assumenda, quod ut.
            </p>
            <div class="mobile-margin--bottom"></div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <p class="font-weight-bold text-size-3">Section Title</p>
            <p class="text-size-2">
              Subhead Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aspernatur nulla inventore praesentium dicta quis facilis error tempora alias voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, neque illum? Atque culpa optio excepturi ea rem exercitationem, ducimus vitae tenetur assumenda magnam voluptatibus at minima veniam cupiditate minus eligendi accusantium, aut explicabo. Dicta laboriosam minus pariatur non error praesentium?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui odio eveniet ratione est dolores magnam vitae dignissimos impedit architecto, rem praesentium quisquam tempora obcaecati pariatur distinctio eaque culpa facilis delectus, nihil laboriosam necessitatibus! Possimus quaerat aliquam modi assumenda, quod ut.
            </p>
            <div class="mobile-margin--bottom"></div>
          </div>
          <div class="col-md-6">
            <img src="../../assets/img/c4.jpg" alt="Lgu name" class="img-fluid">
          </div>
        </div>
      </section>
      <!-- End third section -->
      <!-- Begin fourth section -->
      <section class="pl-5 pr-5 pt-4 pb-4 full-width-section section-satin">
        <h2 class="mb-3">Our Ongoing Program</h2>
        <div class="row">
          <div class="col-md-6">
            <img src="../../assets/img/c5.jpg" alt="ongoing program" class="img-fluid">
            <div class="mobile-margin--bottom"></div>
          </div>
          <div class="col-md-6">
            <p class="font-weight-bold text-uppercase">Project Status <span class="muted">Advocacy</span></p>
            <p class="text-size-3 font-weight-bold">Program Campaign Title</p>
            <p class="text-capitalize font-weight-bold mb-0">By organization name <span class="font-weight-normal muted">February 7, 2019</span></p>
             <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
             <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
             </p>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo, earum magni voluptate dicta ullam nobis enim eos fugiat mollitia!
             </p>
             <h3>75% of Goals Met</h3>
              <a href="javascript:;" class="text-color--primary text-uppercase font-weight-bold">&#x3e;&#x3e; Read more</a>
          </div>
        </div>
      </section>
      <!-- End fourth section -->
      <!-- Begin fifth section -->
      <section class="section pl-4 pr-4 pt-4 pb-4">
        <div class="row">
          <div class="col-md-4">
            <h2 class="text-color--black">Our Past Programs</h2>
          </div>
          <div class="col-md-6 text-right">
            <p class="text-uppercase">Displaying <span class="font-weight-bold">3</span> of <span class="font-weight-bold">9</span></p>
          </div>
          <div class="col-md-2 text-right">
            <a href="javascript:;" class="ml-auto text-color--secondary text-uppercase font-weight-bold">&#x3e;&#x3e; See all</a>
          </div>
          <div class="mobile-margin--bottom"></div>
        </div>
        <div class="row">
          <div class="col-md-4"
            v-for="program in programs"
            :key="program.id"
          >
            <p class="font-weight-bold text-uppercase">Project Status <span class="font-weight-normal muted">{{ program.tag }}</span></p>
            <img :src="program.thumb" alt="thumb" class="img-fluid">
            <h3 class="mt-3 font-weight-bold">{{ program.title }}</h3>
            <small class="text-capitalize font-weight-bold">By organization name <span class="font-weight-normal muted">{{ program.timestamp }}</span></small>
            <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
            <p>{{ program.desc }}</p>
            <h3>50% of Goals Met</h3>
            <router-link class="text-color--secondary text-uppercase font-weight-bold"
              :to="{ name: 'program-item' }"
            >
              &#x3e;&#x3e; Read more
            </router-link>
            <div class="mobile-margin--bottom"></div>
          </div>
        </div>
      </section>
      <!-- End fifth section -->
      <!-- Begin sixth section -->
      <section class="section full-width-section section-ice text-center pt-5 pb-5">
        <h2>Follow Our Journey</h2>
        <div class="container">
          <p class="text-size-3">
            Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
          </p>
            <button class="btn btn-primary">SUBSCRIBE</button>
        </div>
      </section>
      <!-- End sixth section -->
    </div>
  </div>
</template>

<script>
import ItemSlider from '@/components/ItemSlider.vue'

export default {
  components: { ItemSlider },
  data () {
    return {
      champions: [
        {
          id: 1,
          img: 'https://i.pravatar.cc/300?img=1',
          name: 'Stephanie Ayahao',
          position: 'Tuwali tribe',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        },
        {
          id: 2,
          img: 'https://i.pravatar.cc/300?img=9',
          name: 'Elisa Bayaya',
          position: 'Siayan Pangkabuhayan Federation of Cooperatives',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        },
        {
          id: 3,
          img: 'https://i.pravatar.cc/300?img=5',
          name: 'Anna Leah Sarabia',
          position: 'Managing Executive, Gota de Leche',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        },
        {
          id: 4,
          img: 'https://i.pravatar.cc/300?img=10',
          name: 'Imelda Pante',
          position: 'Public School Teacher',
          desc: 'Pinapakita namin sa kanila para hindi nawawala sa isip nila. Para kapag aalis sila, lalabas sila papunta ng Maynila, alam nila na sa amin, mayroon kaming ganitong culture sa Kiangan, Ifugao.'
        }
      ],
      programs: [
        {
          id: 1,
          tag: 'Women Empowerment',
          thumb: require('@/assets/img/3.jpg'),
          title: 'Maecenas blandit pulvinar purus.',
          timestamp: 'February 10, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 2,
          tag: 'Rural Development',
          thumb: require('@/assets/img/3.jpg'),
          title: 'Aenean vitae sapien. Sed quis risus vel justo lacinia semper.',
          timestamp: 'February 9, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 3,
          tag: 'UNIVERSAL HEALTHCARE',
          thumb: require('@/assets/img/3.jpg'),
          title: 'Nunc purus lectus, ornare id, porttitor non, imperdiet quis.',
          timestamp: 'February 12, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route.name)
    var footer = document.getElementById('footer-bottom')
    footer.classList.add('mb-override-footer--item')
  }
}
</script>

<style>

</style>
