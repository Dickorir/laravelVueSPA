<template>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Categories</li>
            </ol>

            <div class="row">
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header d-flex">
                            <span>
                                <i class="fas fa-chart-area mr-1"></i>
                            Categories Management
                            </span>
                            <button class="btn btn-primary ml-auto" v-on:click="showNewCategoryModal"><span class="fa fa-plus"></span>Create New</button>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Namde</td>
                                    <td>Image</td>
                                    <td>Action</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Shiirt</td>
                                    <td>Image</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span> </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <b-modal ref="newCategoryModal" hide-footer title="Add New Category">
                <div class="d-block">
                    <form v-on:submit.prevent="createCategory">
                        <div class="form-group">
                            <label for="name">Email Name</label>
                            <input type="text" class="form-control" id="name" v-model="categoryData.name" placeholder="Category Name" />
                        </div>
                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control" id="image" v-on:change="attachImage" />
                        </div>
                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>
                            <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span>Save</button>
                        </div>
                    </form>
                </div>
            </b-modal>
        </div>
</template>
<script>
    export default {
        name: 'category',
        data(){
            return {
                categoryData: {
                    name: '',
                    image: ''
                }
            }
        },
        methods: {
            attchImage() {
                //  to use file reader

            },
            showNewCategoryModal() {
                this.$refs.newCategoryModal.show();
            },
            hideNewCategoryModal() {
                this.$refs.newCategoryModal.hide();
            },
            createCategory() {
                console.log('form submitted')
            }
        }
    }
</script>
