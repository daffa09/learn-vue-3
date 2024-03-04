<template>

  <h3>Rendering</h3>
  <div>{{ message }}</div>
  <br><br><br><br><br>
  <h3>Method</h3>
  <!-- gunakan titik dua untuk rendering pada vue js, artinya mengambil data dari variabel message -->
  <span :title='message'>hover dan diam selama 2 detik disini</span><br>
  <div class="">{{ count }}</div>

  <!-- method inline -->
  <button @click="count++">Add 1</button><br>
  <button @click="addCount">Add Count</button>

  <br><br><br><br><br>
  <h3>Two Way Data Binding</h3>
  <div>{{ message2 }}</div>
  <!-- two way data binding -->
  <input v-model="message2" placeholder="v-model">
  <input @input="message2 = $event.target.value" :value="message2" placeholder="non v-model">

  <br><br><br><br><br>
  <h3>Conditional</h3>
  <div class="" v-if="status">Tampilkan ini</div>
  <button @click="setStatus()">Toogle Tampil</button>

  <div v-if="status">True</div>
  <div v-else-if="status2">Something else</div>
  <div v-else>Else</div>


  <br><br><br><br><br>
  <h3>Looping For</h3>
  <ol>
    <li v-for="(todo,index) in todos" :key="todo.id">
      {{ index }} - {{ todo.activity  }}
    </li>
  </ol>

  <br><br><br><br><br>
  <h3>Component sederhana</h3>
  <div class="">Ini adalah parent component</div>
  <child-component/>


  <br><br><br><br><br>
  <!-- ini dari parent ke child -->
  <h3>Props pada component</h3>
  <child-component text="12345"/>
  <child-component :text="message2"/>


  <br><br><br><br><br>
  <h3>Loop Component</h3>
  <child-component v-for="todo in todos" :key="todo" :text="todo.activity"/>


  <br><br><br><br><br>
  <h3>LifeCycle - cek di console log</h3>
  <div id="lifecycle">{{ message }}</div>
  <button @click="message = 'tulisan setelah di ubah'">Ubah</button>

  <br><br><br><br><br>
  <h3>v-once (data tidak adak berubah, jadi hanya di render sekali saja)</h3>
  <div v-once>{{ message }}</div>
  <button @click="message = 'berubah nih'">Ubah</button>

  <br><br><br><br><br>
  <h3>v-html (render html dari variabel yang sebetulnya struktur html)</h3>
  <div v-html="message3"></div>

  <br><br><br>
  <h3>Computed Property (untuk menghitung suatu perhitungan atau memproses suatu data secara otomatis dan realtime)</h3>
  <div>{{ total }}</div>
  <input v-model="num1"/>
  <input v-model="num2"/>

  <br><br><br>
  <h3>Computed Property - Getter dan Setter</h3>
  <div>{{ discount }}</div>
  <input v-model="num1"/>
  <input v-model="num2"/>
  <button @click="addDiscount">+ Discount</button>

  <br><br><br>
  <h3>Wathcer (melihat perubahan apa yang terjadi pada sebuah data)</h3>
  <div>{{ message }}</div>
  <input v-model="message"/>

  <br><br><br>
  <h3>Dynamic Class (secara dinamis berubah sesuai keinginan)</h3>
  <div :class="status ? 'success' : 'failed'">STATUS</div>
  <div :class="status ? 'success bold' : 'failed'">STATUS</div>
  <button @click="status = !status">Change !</button>
  <div :class="[boldClass, greenClass]">TEST</div>

  <br><br><br>
  <h3>Refs pada component (bagaimana cara child dan parent berinteraksi melalui perantara refs dan emits)</h3>
  <!-- dan @child-click disini berasal dari emits yang di daftarkan -->
  <!-- jika tombol yang berasal dari child ini di klik, akan menjalankan sebuah method berupa onPressParent -->
  <child-component ref="childComponent" @child-click="onPressparent()"/>
  <!-- sementara button ini akan memanggil method yang berasal dari child nya, jadi method yang ada di child bisa di pake di parent menggunakan refs -->
  <button @click="clickSaya()">Button Dari Parent</button>

  <br><br><br>
  <h3>Update parent state ke component</h3>
  <div>{{ message4 }}</div>
  <hr>
  <!-- event berasal dari component child nya dimana jika ada update yang ditangkap melalui emits update, maka message4 akan selalu berubah mengikuti isi dari event yang dikembalikan  -->
  <child :model-value="message4" @update:model-value="message4 = $event"/>
  <!-- ini adalah versi simple nya dan sangat mudah, karena v-model sudah sintetik fungsi dari yang di atas -->
  <child v-model="message4"/>

  <br><br><br>
  <h3>Slot (mengisi konten yang dimana beberapa bagian itu selalu sama, seperti header dan footer)</h3>
  <slotComponent>
    <div>Ini adalah isi dari slot</div>
    <div>Lalu ini juga sama</div>
  </slotComponent>

  <br><br><br>
  <h3>Named Slot (slotnya diberikan nama)</h3>
  <!-- jadi di dalam slot ini bisa beragam layout yang di masukan, dan slot juga memainkan parent child konsep -->
  <slotComponent2>
    <template v-slot:default>
      <span>Ini adalah judul</span>
    </template>

    <template v-slot:slotDua>
      <span>Ini adalah Content</span>
    </template>

    <template v-slot:slotTiga>
      <span>Ini adalah Footer</span>
    </template>
  </slotComponent2>

  <br><br><br>
  <h3>Props dan slot (melempar data dari component ke parent menggunakan props dan slot)</h3>
  <!-- props hanya mengambil data dari child nya saja tidak bisa berinteraksi seperti halnya emits -->
  <slotComponent2>
    <template v-slot:default="props">
      <span>judul : {{ props.data }}</span>
    </template>
  <!-- penamaan data2 dan lain nya itu bisa di daftarkan pada child component nya -->
    <template v-slot:slotDua="props">
      <span>content : {{ props.data2 }}</span>
    </template>

    <template v-slot:slotTiga="{data}">
      <span>footer : {{ data }}</span>
    </template>
  </slotComponent2>

  <br><br><br>
  <h3>component from global component (component yang di daftarkan pad global, sehingga bisa di akses dimana pun)</h3>
  <!-- ini di panggil tanpa memerlukan import seperti sebelumnya -->
  <globalComponent/>

  <br><br><br>
  <h3>types pada props (mengatur config data yang bisa di set pada child serta pada parent bisa mengisi parameter tersebut secara spesifik)</h3>
  <!-- message dan number di set pada childnya, penamaan variabel nya pun berdasarkan yang di daftarkan pada child nya -->
  <typeProps :message="'lohaloo...'" :number="100" />

  <br><br><br>
  <h3>provide dan inject (melempar data dari parent ke component paling akhir atau nested component)</h3>
  <Satu/>

  <br><br><br>
  <h3>Keep Alive (membuat data tidak perlu dirender ulang jika ingin kembali pada halaman tertentu)</h3>
  <div class="tab">
    <button v-for="tab in tabs" :key="tab" :class="['tab-button', {active: currentTab === tab}]"  @click="currentTab = tab">{{ tab }}</button>
  </div>
  <keep-alive>
    <component :is="currentTabComponent"/>
  </keep-alive>


  <br><br><br>
  <h3>Mixin (Menggabungkan javascript lain ke dalam component)</h3>
  <!-- jadi semua apapun yang ada di dalam mixin akan bisa digunakan disini -->
  <pre>{{ $data }}</pre>
  <button @click="onPressed">Klik Saya</button>


  <br><br><br>
  <h3>Teleport atau Portal View (melempar atau mengirim sebuah komponent ke tempat lain)</h3>
  <teleport to="#target-teleport">
    <!-- componentnya sudah di teleport menjadi di luar id app pada file index.html -->
    <Home/>
  </teleport>
</template>

<script>
// semua component yang di import harus di daftarkan disini blm terdaftar di global component
import childComponent from "./components/childComponent.vue"
import child from "./components/child2.vue"
import slotComponent from "./components/slotComponent.vue"
import slotComponent2 from "./components/slotComponent2.vue"
import Home from "./components/rumah.vue"
import Post from "./components/Post.vue"
import About from "./components/About.vue"
// tidak perlu menggunakan .vue karena tanpa itu akan otomatis mencari js nya
import basicMixin from "./mixins/basic"
import mergeMixin from "./mixins/merge"


export default {
  mixins: [basicMixin, mergeMixin],

  components: {
    childComponent,
    child,
    slotComponent,
    slotComponent2,
    Home,
    Post,
    About
    },

  provide() {
    return {
      providedAuthor: this.author
    }
  },

  data(){
    return{
      author:'Fanthom',
      currentTab: 'Home',
      tabs: ['Home', 'Post', 'About'],
      isi:100,
      num1:0,
      num2:0,
      message:'Lohaloo..',
      message2:'Lohalo',
      message3:'<h1>Ini adalah Message 3 yang sebenarnya HTML</h1>',
      message4:'', //akan selalu berubah jika ada update dari component child nya
      count: 0,
      status:false,
      status2: true,
      todos:[
        {id:1, activity:'Makan'},
        {id:2, activity:'Minum'},
        {id:3, activity:'Tidur'},
        {id:4, activity:'Main'},
        {id:5, activity:'Belajar'},
      ],
      boldClass: 'bold',
      greenClass: 'success'
    }
  },

  computed:{
    total() {
      if (this.num1 > this.num2) {
        return 'satu lebih besar'        
      }
        return 'dua lebih besar'
    },

    discount: {
      // get untuk mengambil data nya disesuiakan dengan variabel computed yang di tetapkan
      get(){
        return parseInt(this.num1) + parseInt(this.num2)
      },
      // dijalankan saat button di klik, dan juga akan set value discount yang berasal dari computed property
      set(value){
        this.num1 -= value
        this.num2 -= value
      }
    },

    currentTabComponent(){
      return this.currentTab.toLowerCase()
    }
  },

  watch:{
    // nama methodnya harus sama dengan nama variabel yang di watch
    message(value){
      console.log('perubahan  di message', value);
  }
  },

  methods:{
    addCount() {
      this.count += 2
    },
    setStatus(){
      this.status = !this.status
    },
    addDiscount(){
      // akan di jalankan ketika button di klik, dan juga akan set value discount yang berasal dari computed property
      this.discount = 500
    },
    onPressparent(val){
      console.log('click parent');
      console.log(val);
    },
    clickSaya(){
      this.$refs.childComponent.onClick()
    }
  },

  // lifecycle hook
  // sebelum template di render
  beforeCreate(){
    console.log('beforeCreate')
  },

  created(){
    console.log('created')
    console.log(this.message);
    // id lifecycle akan null karena render template belum selesai
    console.log(document.getElementById('lifecycle'));
  },

  // dijalankan setelah template selesai di render
  beforeMount(){
    console.log('beforeMount')
  },

  // dijalankan setelah template selesai di render
  mounted(){
    console.log('mounted')
    console.log(this.message);
    // disini baru bisa dibaca, karena tepmlate sudah di render
    console.log(document.getElementById('lifecycle'));
  },

  // jika ada perubahan akan merender ulang
  beforeUpdate(){
    console.log('beforeUpdate')
    // mengambil data dari template sebelum di render ulang
    console.log(this.message);
    console.log(document.getElementById('lifecycle').textContent);
  },

  // jika ada perubahan akan merender ulang
  updated(){
    console.log('updated')
    // data nya sudah terupdate setelah di render ulang
    console.log(this.message);
    console.log(document.getElementById('lifecycle').textContent);
  },

  // dijalankan ketika component di destroy
  beforeUnmount(){
    console.log('beforeDestroy')
  },

  // dijalankan ketika component di destroy
  unmounted(){
    console.log('destroyed')
  },
  // end lifecycle hook
}
</script>

// style scoped itu styling yang hanya bisa digunakan pada file ini saja
<style scoped>
.success{
  color: green;
}

.failed {
  color: red;
}

.bold{
  font-weight: 700;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;
}

.tab-button.active {
  color: red;
  font-weight: 700;
  background-color: #ddd;
}

.demo-tab {
  padding: 10px;
  border: 1px solid #f2f2f2;
  margin: 10px;
}
</style>