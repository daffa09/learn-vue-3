const merge ={
  data(){
    return {
      // misal properti ini sudah ada di parent maka dia tidak akan bisa di tampilkan
      message5: 'LOHALOHA',
      isLoading: false,
      isLoading2: false,
      isLoading3: false,
      isLoading4: false,
      isLoading5: false,
      isLoading6: false,
      // dan ini semua akan muncul secara otomatis ke dalam parent nya
    }
  }
}

export default merge