import { getComments } from '../src';

(async () => {
    try {
        // replace this cookie with a valid cookie by logging in manualy in the browser
        const cookie = 'cookie: tt_webid_v2=6823301158930269698; tt_webid=6823301158930269698; SLARDAR_WEB_ID=0a0cb242-cbb4-46a5-9b69-82eb0ab9bbb1; passport_csrf_token=ecfe76f4b85a7f3e3b1e12e4614a5761; odin_tt=730296d8a9abced4e320a45a716c0c6117e558310db3269bed57dc68c4466a5a226c2629827a61fc0e2b274664c8ee27324ecb02e2f2190e24d9617e3ca60d11; sid_guard=7372f9566124d0e511edfd708bb9ab95%7C1588673861%7C5184000%7CSat%2C+04-Jul-2020+10%3A17%3A41+GMT; uid_tt=b924a255e7a7f64bd831dfae85005a61a65e8e5c500043b055324caeddc046db; uid_tt_ss=b924a255e7a7f64bd831dfae85005a61a65e8e5c500043b055324caeddc046db; sid_tt=7372f9566124d0e511edfd708bb9ab95; sessionid=7372f9566124d0e511edfd708bb9ab95; sessionid_ss=7372f9566124d0e511edfd708bb9ab95';
        const comments = await getComments('6812205946127781122', cookie, { number: 1 });
        console.log(comments);
    } catch (error) {
        console.log(error);
    }
})();

// response:
// {
//     status_code: 0,
//     comments: [
//       {
//         cid: '6812245751998414849',
//         text: 'Esha ka plz bana do',
//         aweme_id: '6812205946127781122',
//         create_time: 1586099568,
//         digg_count: 208,
//         status: 1,
//         user: [Object],
//         reply_id: '0',
//         user_digged: 0,
//         reply_comment: null,
//         text_extra: [],
//         reply_comment_total: 15,
//         reply_to_reply_id: '0',
//         is_author_digged: false,
//         stick_position: 0,
//         user_buried: false,
//         label_list: null
//       }
//     ],
//     cursor: 1,
//     has_more: 1,
//     reply_style: 2,
//     total: 12552,
//     extra: { now: 1588675071000, fatal_item_ids: null },
//     log_pb: { impr_id: '2020050510375101011522807405A05083' },
//     hotsoon_filtered_count: 0
// }