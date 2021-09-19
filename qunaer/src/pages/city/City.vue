<template>
    <div>
        <city-header></city-header>
        <city-list :cities = "cities"></city-list>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
    export default{
        name: 'City',
        components: {
            'city-header': CityHeader,
            'city-list': CityList
        },
        computed: {
            computedCities(){
                let result = [],
                    length = this.hotCities.length,
                    item;
                
                for (let i = 0; i < length; i++) {
                    let resObj = {};
                    item = this.hotCities[i];

                    if(item.order === 1){
                        resObj.borderType = '';
                    }else if(item.order === 2 || item.order === 3){
                        resObj.borderType = 'border-left';
                    }else if(item.order % 3 === 1){
                        resObj.borderType = 'border-top';
                    }else{
                        resObj.borderType = 'border-topleft';
                    }

                    result.push(resObj);
                }
            }
        },
        data () {
            return {
                hotCities: [],
                cities: []
            }
        },
        methods: {
          getCityInfo(){
              axios.get('/api/city.json')
                .then(this.getCityInfoSuccess);
          },
          getCityInfoSuccess(res){
              let data = res.data.city;
            //   this.hotCities = data.hotCities;
              this.cities = data;
          }
        },
        mounted(){
            this.getCityInfo();
        }
    }
</script>