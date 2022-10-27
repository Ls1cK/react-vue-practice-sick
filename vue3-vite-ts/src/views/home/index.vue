<script setup lang="ts">
import { indexCards } from "./constant";
import { ref, computed } from "vue";
import { useRouter } from 'vue-router'

let search = ref("");
const filteredList = computed(() =>
  indexCards.filter((card) => {
    return card.title.toLowerCase().includes(search.value.toLowerCase());
  })
);
const router = useRouter()
function jumpTo(path: string) {
  router.push(path)
}
</script>
<template>
  <div class="page">
    <div class="home">
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search title.."/>
        <label>Search title:</label>
      </div>
      <div class="wrapper">
        <div class="card" v-for="card in filteredList" :key="card.id">
          <span @click="jumpTo(card.routePath)">
            <img v-bind:src="card.img" />
            <small>posted by: {{ card.author }}</small>
            {{ card.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 16px;
}
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .search-wrapper {
    position: relative;
    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      z-index: -1;
      transition: 0.15s all ease-in-out;
    }
    input {
      padding-left: 5px;
      padding-top: 5px;
      height: 20px;
      line-height: 20px;
      width: 200px;
      outline: none;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid #BFC0C0;
      transition: 0.15s all ease-in-out;
      background: white;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label {
          font-size: 10px;
          transform: translateY(-18px);
        }
      }
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
      }
    }
  }

  .wrapper {
    display: flex;
    max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 124px;
    margin: 12px;
    transition: 0.15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    span {
      text-decoration: none;
      padding: 12px;
      color: #03a9f4;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      small {
        font-size: 10px;
        padding: 4px;
      }
    }
  }
}
</style>