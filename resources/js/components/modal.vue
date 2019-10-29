<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p style="direction: rtl" class="text-right">
                    در این صفحه مشکل اصلی باز شدن چندین Modal را حل کردم. وقتی ما در یک صفحه چندین دگمه داریم که همگی بر روی یک مودال قرار است اعمال شوند به عبارتی چندین دگمه هستند که با زدن آنها یک مودال باز خواهد شد باید از روش زیر استفاده کنیم . در غیر این صورت به تعداد دگمه های موجود در داخل صفحه مودال ما باز خواهد شد و همگی روی هم قرار خواهند گرفت .
                </p>
            </div>
            <div class="col-6 offset-3">
                <b-table striped hover :items="students" :fields="fields">
                    <template v-slot:cell(show_details)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                        </b-button>
                    </template>
                    <template v-slot:row-details="row">
                        <b-card>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>id_no:</b></b-col>
                                <b-col>{{ row.item.id_no }}</b-col>
                            </b-row>

                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                                Info modal
                            </b-button>

                            <b-button size="sm" @click="infoTest(row.item, row.index, $event.target)" class="mr-1">
                                Info modal test
                            </b-button>

                            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
                        </b-card>
                    </template>
                </b-table>
            </div>
        </div>
        <!--******************-->
        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
        <!--******************-->
        <b-modal id="testModal" title="testModal" ok-only @hide="resetInfoModal">
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
        <!--******************-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: ['id', 'fullName', 'show_details'],
                students: [
                    {id: 1, fullName: 'alireza musavi', id_no: 1111},
                    {id: 2, fullName: 'Melila musavi', id_no: 2222},
                    {id: 3, fullName: 'Parisa Hanifeh zafeh', id_no: 3333},
                    {id: 4, fullName: 'Mehdi Jafarzadeh', id_no: 4444},
                    {id: 5, fullName: 'Kiarash Jafarzadeh', id_no: 5555},
                    {id: 6, fullName: 'Shabnam hanifehzadeh', id_no: 6666},
                ],
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                }
            }
        },
        name: "modal",
        methods: {
            resetInfoModal() {
                this.infoModal.title = '';
                this.infoModal.content = '';
            },
            info(item, index, button) {
                this.infoModal.title = `Row index: ${index}`;
                this.infoModal.content = JSON.stringify(item, null, 2);
                this.$root.$emit('bv::show::modal', this.infoModal.id, button);
            },
            infoTest(item, index, button) {
                this.infoModal.content = JSON.stringify(item, null, 2);
                this.$root.$emit('bv::show::modal', 'testModal', button);
            },
        }
    }
</script>

<style scoped>

</style>