<template>
    <div class="login">
        <el-row>
            <el-col :xs="0" :sm="0" :md="0" :lg="14">
                <div class="pic">
                    <div class="title animate__animated animate__fadeIn">
                        <text>欢迎使用</text>
                        <text>黑武器，后台管理系统。持续更新中......</text>
                    </div>
                    <img src="@/assets/imgs/login/bg1.png" alt="" />
                    <div class="out_img animate__animated animate__fadeInLeft animate__faster">
                        <img src="@/assets/imgs/login/people.svg" />
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="10">
                <div class="form">
                    <img class="bg2" src="@/assets/imgs/login/bg2.png" alt="" />
                    <div
                        class="content p-10 w400px rounded-xl h500px animate__animated animate__fadeInDown animate__fast">
                        <div class="name">
                            <img src="@/assets/logo.png" alt="" />
                            <text>黑武器</text>
                        </div>
                        <el-form :model="loginParams" :rules="rules">
                            <el-form-item prop="username">
                                <el-input placeholder="请输入用户名" v-model="loginParams.username">
                                    <template #prefix>
                                        <el-icon :size="20">
                                            <UserFilled />
                                        </el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input placeholder="请输入密码" v-model="loginParams.password" type="password">
                                    <template #prefix>
                                        <el-icon :size="20">
                                            <Lock />
                                        </el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="randcodeimg">
                                <div class="randcodeimg-content">
                                    <el-input placeholder="请输入验证码" v-model="loginParams.password" type="password">
                                        <template #prefix>
                                            <el-icon :size="20"><Connection /></el-icon>
                                        </template>
                                    </el-input>
                                    <img v-if="randCodeData.requestCodeSuccess"
                                        style="margin-top: 2px; max-width: initial" :src="randCodeData.randCodeImage"
                                        @click="handleChangeCheckCode" />
                                    <img v-else style="margin-top: 2px; max-width: initial" src="@/assets/checkcode.png"
                                        @click="handleChangeCheckCode" />
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <el-button class="loginBtn" @click="login" type="primary">
                                    登录
                                </el-button>
                            </el-form-item>
                        </el-form>
                        <!-- 账号信息 -->
                        <div class="account_info">
                            <div class="admin">
                                <div class="tip text-5">管理员 | 普通用户</div>
                                <view class="accountNum mt-2">
                                    <text>账号：admin | user</text>
                                    <text class="m-l-10">密码：123456</text>
                                </view>
                            </div>
                        </div>
                        <img class="bg3 rounded-xl" src="@/assets/imgs/login/bg3.png" alt="" />
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { loginApi, getRandCodeImg } from '@/api/login'

const loginParams = reactive({
    username: "admin",
    password: 123456,
})

const randCodeData = reactive({
    randCodeImage: '',
    requestCodeSuccess: false,
    checkKey: null,
});

async function login() {
    const res = await loginApi(loginParams)
    console.log(res)
}

async function handleChangeCheckCode() {
    const res = await getRandCodeImg()
    console.log('res-> ', res)
    randCodeData.requestCodeSuccess = res.success
    randCodeData.randCodeImage = res.result
}

handleChangeCheckCode()
</script>

<style lang="scss">
::-webkit-scrollbar {
    display: none;
}

.el-input .el-input__wrapper {
    height: 45px;
}

.login {
    width: 100vw;
    display: flex;
    height: 100vh;
    overflow: hidden;

    .el-row {
        width: 100%;
        height: 100%;

        .el-col {
            width: 50%;

            .pic {
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;

                .title {
                    margin: auto;
                    position: absolute;
                    top: 160.0012px;
                    right: 180px;
                    display: flex;
                    flex-direction: column;

                    text {
                        &:nth-child(1) {
                            font-size: 28.0013px;
                            font-weight: bold;
                        }

                        &:nth-child(2) {
                            font-size: 12px;
                            margin-top: 10.0012px;
                            color: gray;
                        }

                        &:nth-child(3) {
                            font-size: 12px;
                            margin-top: 10.0012px;
                            color: gray;
                        }
                    }
                }

                .out_img {
                    width: 40%;
                    height: 80%;
                    position: absolute;
                    top: 150px;

                    img {
                        width: 100%;
                        height: 100%;

                        transform: rotateY(180deg);
                    }
                }

                img {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                }
            }

            .form {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                .bg2 {
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                .el-form-item__error {
                    margin-top: 1.9988px;
                }

                .content {
                    box-shadow: 0px 0px 10.0012px 1.9988px rgba(0, 0, 0, 0.1);

                    .bg3 {
                        width: 100%;
                        height: 49.9987px;
                        position: absolute;
                        bottom: 0px;
                        right: 0px;
                    }

                    .name {
                        font-size: 30px;
                        width: 100%;
                        height: 20%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 70.0012px;
                            height: 70.0012px;
                        }

                        text {
                            text-shadow: 0px 0px 10.0012px rgba(255, 255, 255, 0.6);
                        }
                    }

                    .el-form {
                        height: 65%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        .el-form-item {
                            width: 98%;

                            .password {
                                display: flex;
                                width: 100%;
                                justify-content: space-between;

                                .el-checkbox__input.is-checked .el-checkbox__inner {
                                    background-color: orange;
                                    border: 0;
                                }

                                .el-checkbox__input.is-checked+.el-checkbox__label {
                                    color: #fff;
                                }

                                .forgetPassword {
                                    color: gray;
                                    cursor: pointer;
                                }
                            }

                            .loginBtn {
                                cursor: pointer;
                                width: 100%;
                                height: 45px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: 0;
                                color: #fff;
                                border-radius: 4.9988px;
                                font-size: 16.0013px;
                            }
                        }
                    }

                    .account_info {
                        width: 100%;
                        // height: 10%;
                        display: flex;
                        align-items: center;
                        flex-direction: column;

                        .admin {
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            height: 50%;

                            text {
                                color: gray;
                            }
                        }

                        .user {
                            width: 100%;
                            display: flex;
                            height: 50%;
                            flex-direction: column;

                            .accountNum {
                                display: flex;
                                align-items: center;

                                text {
                                    color: gray;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .randcodeimg-content {
        display: flex;
        .el-input {
            padding-right: 9px;
        }
    }
}

</style>