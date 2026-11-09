const SUPABASE_URL = "https://wjwcgnkftnlcolqzaflt.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_CMFsyuDtUV3V7DvUmtplJw_T8PqBN2S";


window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


console.log("CLIENTE SUPABASE:", window.supabaseClient);