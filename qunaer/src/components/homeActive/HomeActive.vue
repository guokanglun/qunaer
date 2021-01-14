<template>
    <div class='activity border-top'>

        <div class='activity-item border-right'>

            <img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png">

        </div>
        <div class='activity-item'>

            <img src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png">

        </div>

    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'HomeActive'
    }
</script>

<style scoped>
    .activity{
        border-top: .3rem solid #ddd;
        position: relative;
        display: flex;
        background: #fff;
    }
    .activity .activity-item{
        flex:1;
        font-size:.28rem;
        text-align: center;
        height: 1.4rem;
    }
    .activity .activity-item img{
        width:100%;
        height: 100%;
    }
</style>
