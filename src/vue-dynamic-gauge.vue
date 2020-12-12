<template>
  <div class="meter-gauge"></div>
</template>

<script>
export default {
  name: "VueDynamicGauge"
};
</script>

<style lang="scss">
.meter-gauge {
  content: "";
  width: 400px;
  height: 200px;
  background-color: #e5e871;
  margin: 50px auto;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
  &:before {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    margin-left: 178px;
    margin-top: 178px;
    border-radius: 20px;
    background-color: #8fa960;
  }
  &:after {
    content: "";
    position: absolute;
    margin-top: 20px;
    margin-left: 185px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 180px solid #3b6856;
    border-radius: 10px;
    -webkit-transform-origin: 50% 98%;
    -ms-transform-origin: 50% 98%;
    transform-origin: 50% 98%;
    -webkit-animation: moveNeedle 8s;
    animation: moveNeedle 8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

@-webkit-keyframes moveNeedle {
  0% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  30% {
    -webkit-transform: rotate(70deg);
    transform: rotate(70deg);
  }
  50% {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }
  80% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  100% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}
@keyframes moveNeedle {
  0% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  30% {
    -webkit-transform: rotate(70deg);
    transform: rotate(70deg);
  }
  50% {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }
  80% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  100% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}
</style>
