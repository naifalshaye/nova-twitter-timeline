<template>
     <card class="h-auto">
            <div class="px-3 py-4">
            <div align="center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#00A3EA" height="32" viewBox="0 0 24 24">
             <path opacity="0" d="M0 0h32v32H0z"></path>
             <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
            </div>
                <h1 class="text-center text-sm text-80 uppercase mb-3" style="margin-top:-4px;">Twitter Mentions Timeline</h1>
                <div v-for="tweet in tweets" class="max-w-sm rounded overflow-hidden">
                    <div class="px-6 py-1" style="border-bottom:solid 1px #ccc;">
                        <a style="font-size:16px; text-decoration: none; color:black;" target="_blank" :href="'https://twitter.com/' + tweet.user.screen_name">
                            <img :src="tweet.user.profile_image_url_https" width="48" style="margin-bottom:-50px; border-radius: 50%;">
                        </a>
                        <div style="margin-left:55px !important;">
                            <div>
                                <a style="font-size:16px; text-decoration: none; color:black;" target="_blank" :href="'https://twitter.com/' + tweet.user.screen_name">{{ tweet.user.name}}</a>
                                <a style="color:#7C8B97; font-size:14px;" target="_blank" :href="'https://twitter.com/' + tweet.user.screen_name">@{{tweet.user.screen_name}} </a>
                                <p style="font-size:12px; text-align:right; margin-top:-15px;">{{ tweet.created_at | formatDate}}</p>
                            </div>
                        </div>

                        <a style="font-size:16px; text-decoration: none; color:black;" target="_blank" :href="'https://twitter.com/' + tweet.user.screen_name + '/status/'+ tweet.id_str">
                            <p style="font-size:14px; color:black; padding-left:55px; margin-top:10px; padding-bottom:15px;">
                                {{ tweet.text }}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </card>
</template>

<script>
export default {

    props: ['card'],

    data: () => {
        return {
            tweets: [

            ]
        }
    },
    mounted() {
        Nova.request().get('/nova-vendor/nova-twitter-timeline/timeline')
        .then(response => {
            this.tweets = response.data;
        });
    },

}


</script>
