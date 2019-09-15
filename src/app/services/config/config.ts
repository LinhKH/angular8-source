/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { environment } from '../../../environments/environment';
import { forEach } from "lodash";

export const SORT = [
  'ASC',
  'DESC'
];
export const API = {
  login: 'api/auth',
  refresh_token: 'api/auth',
  get_common_master: 'api/master/common',
  get_postal_code: 'api/master/postal-code',
  get_prefecture: 'api/master/prefecture',
  get_business_license_areas: 'api/transport-operator/get-business-license-areas',
  get_trans_name: 'api/driver-detail/get-trans-name',
  get_vehicle_type: 'api/master/vehicle-type',
  get_vehicle_driver_list: 'api/master/vehicle_driver_list',
  get_dashboard: 'api/master/dashboard',
  download_zip_file_dashboard: 'api/dashboard/export',
  get_transport_operator: 'api/master/transport-operator',
  get_transport_operator_by_id: 'api/transport-operator/detail',
  search_company: 'api/transport-operator/list',
  transport_operator: 'api/transport-operator/list',
  search_driver: 'api/driver/list',
  search_driver_order: 'api/driver/order-detail',
  get_pdf_file_driver: 'api/driver/get-pdf',
  get_company: 'api/master/company',
  get_agency: 'api/master/agency',
  get_agency_commission: 'api/commission/agency-list',
  get_commission_statistic: 'api/commission/statistic',
  get_payment_type: 'api/master/payment-type',
  get_agency_list: 'api/agency/list',
  upset_agency: 'api/agency',
  get_agency_detail: 'api/agency/detail',
  get_option_service: 'api/master/option-service',
  get_rep: 'api/master/rap',
  get_org: 'api/master/org',
  get_user: 'api/master/user',
  order_cancel: 'api/order/cancel',
  order_assign: 'api/order/driver',
  set_dispatch_order_detail: 'api/order/dispatch',
  create_order: 'api/order/upsert',
  get_order_detail: 'api/order/detail',
  search_order: 'api/order/list',
  check_coupon_order: 'api/order/checkcoupon',
  re_estimate_order_detail: 'api/order/detail/re-estimate',
  cancel_order_detal: 'api/order/detail/cancel',
  checkmail_contact_historys: 'api/contact-history/validate-before-send-mail',
  checkmail_contact_histories: 'api/contact-histories/validate-before-send-mail',
  search_contact_historys: 'api/contact-histories/list',
  get_contact_history_by_id: 'api/contact-history/detail',
  upsert_contact_history: '/api/contact-history/upsert',
  upsert_contact_histories: 'api/contact-histories/upsert',
  export_contact_history: '/api/contact-history/export',
  export_contact_histories: '/api/contact-histories/export',
  upsert_accident_info: 'api/accident-info',
  upsert_accident_and_extra_charge: '/api/order/upsert-child',
  get_extra: '/api/master/extra-type',
  upsert_transport_operator: 'api/transit-list',
  search_customer: 'api/customer/list',
  checkmail_customer: 'api/customer/validate-before-send-mail',
  get_customer_by_id: 'api/customer/detail',
  upsert_customer: 'api/customer/upsert',
  get_service_plan: 'api/master/service-plan',
  example: 'demo/index.php',
  ENV: environment,
  /* m_mail_template */
  search_email_template: 'api/mail-template/list',
  get_mail_template_by_id: 'api/mail-template/detail',
  upsert_mail_template: 'api/mail-template/upsert',
  upsert_transport: 'api/transport-operator/update',
  upsert_vehicle: 'api/transport-operator/upsert',
  upsert_approval: 'api/transport-operator/upsert-mtransporter-approval',
  delete_mail_template: 'api/mail-template/delete',
  /* End m_mail_template */
  /* t_payments */
  search_payments: 'api/payment/list',
  get_payment_by_id: 'api/payment/detail',
  payment_cancel: 'api/payment/payment-cancel',
  get_detail_payment: 'api/payment/detail/detail',
  upsert_detail_payment: 'api/payment/detail/update',
  delete_payment: 'api/payment/detail/delete',
  validate_payment: 'api/payment/validate-before-payment',
  /* End t_payments */
  /* m_driver */
  get_detail_driver: 'api/driver-detail/detail',
  update_detail_driver: 'api/driver-detail/update',
  delete_driver: 'api/driver-detail/delete',
  upload_csv_driver: 'api/driver-detail/upload-csv',
  download_csv_driver: 'api/driver-detail/download-csv',

  /* END m_driver */
  search_mcompany: 'api/company/list',
  get_mcompany_by_id: 'api/company/detail',
  upsert_mcompany: 'api/company/upsert',
  get_mail_template_insert: 'api/mail-template/mail-template-insert',
  search_affiliate: 'api/affiliate/list',
  get_affiliate_by_id: 'api/affiliate/detail',
  upsert_affiliate: 'api/affiliate/upsert',
  search_rap: 'api/rap/list',
  get_rap_by_id: 'api/rap/detail',
  upsert_rap: 'api/rap/upsert',
  delete_master: 'api/master/{type}',
  search_t_company_billing_manage: 'api/company-billing-manage/list',
  get_tcompany_billing_manage_by_id: 'api/company-billing-manage/detail',
  upsert_tcompany_billing_manage: 'api/company-billing-manage/upsert',
  update_approval_status: 'api/company-billing-manage/update-approval-status',
  pdf_preview_tcompany_billing_manage: 'api/company-billing-manage/preview-pdf',
  check_pdf_data_tcompany_billing_manage: 'api/company-billing-manage/check-validate-pdfData',
  upload_company_billing_manage: '/api/company-billing-manage/upload-csv',
  dowload_company_billing_manage: '/api/company-billing-manage/download-csv',
  checkmail_company_billing_manage: 'api/company-billing-manage/validate-before-send-mail',
  send_mail_company_billing_manage: 'api/company-billing-manage/send-mail',
  upload_payment2_company_billing_manage: '/api/company-billing-manage/upload-payment2',
  update_status_retry: 'api/company-billing-manage/update-status',
  get_tax_rate: 'api/master/tax-rate',
  get_master_spot: 'api/master/spot',
  get_user_roles: 'api/user-roles/list',
  get_user_roles_by_id: 'api/user-roles/detail',
  upsert_user_roles: 'api/user-roles/upsert',
  get_permission: 'api/master/permission',
  get_time_price_master: 'api/master/time-price',
  get_top_category: 'api/master/top_category',
  get_second_category: 'api/master/second_category',
  get_third_category: 'api/master/third_category',
  /**maps*/
  map_get_spot_list: 'api/master/navitime/get-spot-list',
  map_get_address_list: 'api/master/navitime/get-address-list',
  map_get_route: 'api/master/navitime/get-route',
  map_get_data_shape: 'api/master/navitime/get-route-shape',
  gmap_get_route: 'api/master/map/directions',
  /**/
  /**user*/
  get_list_user: 'api/user/list',
  upsert_user: 'api/user/upsert',
  get_user_by_id: 'api/user/detail',
  get_user_roles_master: 'api/master/user-roles',
  /**/
  statistics_order: 'api/order/statistics',
  statistics_order_export: 'api/order/statistics/export',
  get_master_email_template: 'api/master/mail-template',
  send_email_with_template: 'api/master/send-mail-template',
  send_email_order: 'api/order/send-mail',
  send_email_contact_history: 'api/contact-history/send-mail',
  send_email_contact_histories: 'api/contact-histories/send-mail',
  send_email_customer: 'api/customer/send-mail',
  check_order_status: 'api/order/check-orders-status',
  checkmail_order_status: 'api/order/validate-before-send-mail',
  current_tax_rate: 'api/order/current_tax_rate',
  /*batch billing*/
  batch_billing: 'api/batch/billing',
  /* elastic search */
  search_elastic: 'api/search',
  search_company_cpn_staff: 'api/search/company',
  PRD_S0101: "api/order/upsert",
  /* Front_決済画面 */
  order_sid: 'api/outbound/order-sid',
  authenticate_order: 'api/outbound/authenticate-order',
  list_transport: 'api/schedule/list-transport',
  list_order_schedule: 'api/schedule/order',
};

export const ADMIN = {
  contact_history: '/admin/contact-history',
  contact_histories: '/admin/contact-histories',
  booking: '/admin/booking',
  order_manager: '/admin/orders-manager',
  booking_detail: '/admin/booking-detail',
  customer: '/admin/customer',
  customer_detail: '/admin/customer-detail',
  driver: '/admin/driver',
  agency: '/admin/agency',
  agency_add: '/admin/agency/add/',
  company_add: '/admin/company-detail/',
  company_billing_manage: '/admin/company-billing-manage/',
  vehicle_map: '/admin/vehicle-map',
}

export const ERR_CODE = {
  OK: 200,
  UNAUTHOR: 401,
  SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  NOT_MODIFIED: 304,
  FOR_BIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR_FIELD: 4000,
  APP_ERROR_LOGIN: 5001,
  SYSTEM_ERROR: 9000,
  SQL_FIELD_ERROR: 90000,
  APP_ERROR_COMMON: 5002,
  SQL_ERROR: 22001,

}

export const ORDER_CODE = {
  ACCEPT_ORDER_01: "01",//注文受付
  PREPARATION_DISPATCH_02: "02",//配車準備中
  DISPATCH_REQUEST_03: "03",//配車依頼
  RESERVE_REQUEST_PROCESS_04: "04",//引当依頼中
  WAITING_PROVISION_RESERVE_05: "05",//引当回答待ち
  RESERVED_06: "06",//引当済み
  DETERMINATION_DISPATCH_07: "07",//配車確定
  CANT_DISPATCH_08: "08",//配車不可
  ORDER_CONFIRM_09: "09",//注文確定
  DONE_10: "10",//完了
  ORDER_CANCEL_60: "60",
  ALERT_WAITING_RESPONSE_80: "80",//引当回答待ちアラート
  PAYMENT_ERROR_91: "91",
  ORDER_ERROR_92: "92",
  SYSTEM_ERROR_99: "99"//システムエラー
}

/*error message referent*/
export const ERR_MSG = {
  ORDER_TYPE_ERROR: 'order_type error',
  TOKEN_ERROR: 'refresh token plss',
  SUCCESS: '処理が完了しました。',
  INVALID: '入力エラーがあります。再度確認してください。',

  MSGV0001: 'には数字以外は入力できません',
  MSGV0002: '{param}には半角英数字以外は入力できません',
  MSGV0003: '{param}には#と0からF以外の文字は入力できません',
  MSGV0004: '{param}には半角英字以外は入力できません',
  MSGV0005: '{param}には記号は入力できません',
  MSGV0006: '{param}にはメールアドレス形式で入力してください',
  MSGV0007: '{param}には既定文字数をオーバーしています',
  MSGV0008: '{param}には日付形式で入力してください',
  MSGV0009: '{param}には時分形式で入力してください',
  MSGV0010: '{param_1}には{param_2}桁以下で入力してください',
  MSGV0011: '{param_1}には{param_2}文字以下で入力してください',
  MSGV0012: '{param}には日付形式で入力してください',
  MSGV0013: '{param}には時分形式で入力してください',
  MSGV0014: '{param}には{param_2}桁以下で入力してください',
  MSGV0015: '{param}には{param_2}文字以下で入力してください',
  MSGV0016: '{param}にはマイナス値は入力できません',
  MSGV0017: '{param}にはHTMLタグは登録できません',
  MSGV0018: '{param}は必須入力項目です',

  MSGV1002: '入力エラーがあります。再度確認してください。',

  MSGA0001: '対象を選択して下さい。',//対象がない場合
  MSGA0002: '対象の{param}にデータがありますが、削除しますか？',//削除対象項目に値がある場合
  MSGA0003: '{param}で差異が発生します。',//データ不一致
  MSGA0004: '該当受注をキャンセルします。よろしいですか？',//受注明細キャンセルボタンを押下
  MSGA0005: '受注に依頼する運送会社の営業外地域が含まれています。別な運送会社を指定してください。',//地区チェックNGあり
  MSGA0006: '顧客登録されていません。',
  MSGA0010: '企業ID{param} は、既に承認されています。再度承認しますか？',
  MSGA0011: '受注情報はキャンセルされています。決済キャンセル返金の変更をしますか？',
  MSGA0012: '{param}は請求書発行済みの請求データが含まれています。　請求書を発行しますか？',
  MSGA0013: 'コンタクト基本ID{param}既に顧客紐づけがされています。　選択した顧客情報で更新しますか？',
  MSGA0014: '合計金額が算出されていません。 乗車/降車場所の見積金額を作成してください。', //見積作成ワーニング
  //MSGA0013: '既に顧客紐づけがされています。 選択した顧客情報で更新しますか？',
  MSGA0018: '決済方法が未選択になっています。',
  MSGA0019: '合算対象の運行が指定されていません。',

  MSGE0001: '受注番号 {order_no} ： {param_1}は変更できません。',//変更不可ステータス
  MSGE0002: '指定された住所情報で変換できません。　都道府県、地区町村、番地を再度正しいか確認してください。',//座標変換エラー
  MSGE0003: 'DB更新に失敗しました。システム管理者へ、更新対象情報とエラーコードをお伝えください。',//DB更新エラー
  MSGE0004: '{param}が同一情報を更新しています。更新完了もしくは30分後に再度更新してください。',//DB排他処理エラー
  MSGE0005: 'マスター未登録エラー。キー {param_0} は、{param_1} に存在していません。',//マスタチェック
  MSGE0006: 'マスター登録済みエラー。キー {0} は、{1} にすでに登録済みです。',//マスタチェック
  MSGE0007: 'データがありませんでした。 キー {0} で {1} しましたが,０件でした。',//マスタ検索
  MSGE0008: '{0} エラー。 キー {1} で {2} しましたが,{3} のため、{4} でした。',//DBデータチェック汎用エラー
  MSGE0009: '選択エラー。選択行数（{0} 件）が、制限値（{1} 件）以上選ばれました。',//データ相関エラー 値以上
  MSGE0010: '選択エラー。選択行数（{0} 件）が、制限値（{1} 件）以下選ばれました。',//データ相関エラー 値以下
  MSGE0011: 'データベースエラーが発生しました。 エラーコード{0}',//DBエラー
  MSGE0012: 'ユーザーログイン時に予期せぬエラーが発生しました。 エラーコード{0}',//ログインエラー
  MSGE0013: 'ログインIDまたはパスワードが違います',//ログイン認証エラー
  MSGE0014: 'セッションのタイムアウトが発生しました',//セッションタイムアウト
  MSGE0015: '{0} さんは，このページを見る権限が与えられていません。',//権限エラー
  MSGE0016: '変更不可エラー 選択されている決済情報に仮売上、実売上、即時売上、簡易オーソリ以外、または支払い方法がクレジット決済ではないデータが含まれています。',//決済ステータス変更不可
  MSGE0016B: '変更不可エラー 選択されている決済情報に未決済以外、または支払い方法がクレジット決済ではないデータが含まれています。',//決済ステータス変更不可
  MSGE0017: '｛0｝はDBに登録されているデータの為削除できません',//DB登録チェックエラー

  MSGE0018: '自社用代理店以外は企業設定必須です。',
  MSGE0019: '{0}は標準メールテンプレートの為削除できません',//メールテンプレート削除
  MSGE0020: '{0}を適用期間が有効のメールテンプレートが存在しないため削除できません',//メールテンプレート削除
  MSGE0021: '{0}で適用期間が正しく設定されていないため更新できません。',//メールテンプレート更新
  MSGE0022: '{param}は、マスタ登録がされていないため承認できません。先にマスタ登録を実施してください。',
  MSGE0023: '{param}は、初期登録の為、反社チェック済みで登録できません。未チェックで登録してください。',
  MSGE0024: 'コミッション設定期間は期間重複できません。適用期間を確認してください。',//コミッション期間登録
  MSGE0025: '開始日と終了日の期間設定が不正です。',//開始終了日エラー
  MSGE0026: '選択されている決済方法から{0}の別な決済方法への変更は行えません。',//決済方法変更エラー
  MSGE0027: '現在の決済ステータスからは決済方法は変更できません。',//決済変更エラー
  MSGE0028: '変更前、変更後で金額が同じです。',//同一金額エラー
  MSGE0029: '0円変更はできません。',//0円金額エラー
  MSGE0030: '決済代行会社との連携が必要な支払い方法ではないため決済変更は行えません。',//支払方法エラー
  MSGE0031: '出力対象の請求対象は単月でしか出力できません。単月での絞り込みを実施してください。',//出力請求月不一致エラー
  MSGE0032: '{0}の請求書PDF作成に失敗しました。',//請求書出力エラー

  MSGE0033: '請求書承認が必要ない請求情報が存在しています。',
  MSGE0034: '請求書出力で承認必要な請求データが含まれており出力できません。',//請求書未承認エラー
  MSGE0035: '送付する請求書が作成されていません。',//請求書ファイル存在エラー
  MSGE0036: '入金～翌月合算請求が発生しているため個別の再作成できません。',
  MSGE0037: '送信相手となる、顧客名、顧客メールアドレスが入力されていません。',//コンタクト顧客情報入力エラー
  MSGE0038: '既に同じ{param}が登録されています。違うU{param}を登録してください。',
  MSGE0039: 'メール送信対象の情報にメールアドレスが設定されていません。',
  MSGE0040: 'ルート算出でエラーが発生しました。乗車/降車の緯度経度を確認してください。',
  MSGE0041: 'メール配信で宛先不明エラーが発生しました。送信先アドレスを確認してください。',
  MSGE0042: 'CVSUPLOADでの必須項目に値がありません',
  MSGE0043: '{param}の受注番号は現在運送会社からの回答待ちの為、新しい配車依頼はできません。',
  MSGE0043_1: '現在運送会社からの回答待ちの為、新しい配車依頼はできません。',
  MSGE0044: '確定受注の為、再見積もりは出来ません。',
  MSGE0045: '見積を紐づけるコンタクト情報を先に登録してください。',
  MSGE0046: '配車確定済みの受注の為、変更できません。　運行手配へ連絡してください。',
  MSGE0047: '支払方法が運行単位での請求合算になっていない為、請求合算できません。',
  MSGE0048: '合算対象が相互指定になっている為、合算できません。',
  MSGE0049: 'MSGE0049',
  MSGE0054: '{param}の運行情報は現在他社運送会社からの回答待ちの為、自社車両選択は配車依頼はできません。',
  MSGE1001: 'メールアドレスが登録されていません。',
  MSGE9997: '{0}のメール送信でエラーが発生しました。システム管理者へご連絡ください。【AutoMailErrCode】{1}',
  MSGE9998: 'DBへのアクセスに失敗しました。システム管理者ご連絡ください',
  MSGE9999: '不明なシステムエラーが発生しました。システム管理者へご連絡ください',

  MSGI0001: '料金変更は発生しません。',//受注金額変更なし
  MSGI0002: '{param}情報を更新します。よろしいですか？',
  MSGI0002_contact: '{param}を新規登録します。よろしいですか？',
  MSGI0003: '月次の締め処理が終了しているため、追加料金以外の金額変更が発生する受注更新は行えません。',//締め済み受注修正
  MSGI0004: '{param}項目を削除しますか？',
  MSGI0005: '料金マスタでの金額設定を超えています。本当に変更しますか？',
  MSGI0006: 'コンタクト情報の顧客IDを指定受注の顧客IDで更新しますか？',
  MSGI0007: '次の経由地を追加しますか？',//経由地追加
  MSGI0010: '前回コントタクト履歴からの新規追加しますか？',
  MSGI0011: '顧客連絡済みへ変更しますか？',
  MSGI0012: '再度顧客連絡用のコンタクト履歴を追加しますか？',
  MSGI1001: '{param}が登録されました。',
  MSGI1002: '終了日付は開始日付以降になるように設定してください。',

  MSG_miss_driver: '乗務員を選択してください。',
  MSG_miss_vehicle: '車両を選択してください。',
  MSG_is_dispatched: '既に引当されているいる運行情報ですが車両/乗務員を変更しますか？',
  MSGEXPORT: '送信できるデータがありません。',
  EmailAlreadySent: "メール送信しました。",
  SQLERROR: 'System error!!?',
  SQL_FIELD_ERROR: 'Field - System error!!?',
  5002: 'Error',
}

export const title_breakcrumb = {
  dashboard: 'Dashboard',
  order_management: "予約台帳",
  order_list: "Order manager",
  add_order: "A New Order",
  order_detail: "問合せ詳細",
  agency_list: "Agency",
  agency_add: "A New Agency",
  agency_detail: "Agency Detail",
  company_management: "企業管理",
  company_list: "Company",
  company_add: "A New Company",
  company_detail: "Company Detail",
  driver_management: "決済一覧_基本画面",
  driver_list: "Driver",
  driver_schedule_list: "Drivers Schedule",
  driver_detail: "Driver Detail",
  driver_add: "A New Driver",
  contact_history_management: "問合せ一覧",
  contact_history_list: "Contact History",
  contact_history_add: "A New Contact History",
  contact_history_detail: "Contact History Detail",
  customer_management: "顧客管理",
  customer_list: "Customer",
  customer_add: "A New Customer",
  customer_detail: "Customer Detail",
  allocation_request_list: "Allocation Request",
  payment_management: "決済管理",
  payment_list: "Payment",
  payment_detail: "Payment Detail",
  company_billing_management: "請求管理",
  company_billing_list: "Company Billing",
  company_billing_detail: "Company Billing Detail",
  affiliate_management: "アフィリエイト管理",
  affiliate_list: "Affiliate",
  affiliate_add: "A New Affiliate",
  affiliate_detail: "Affiliate Detail",
  affiliate_result: "Affiliate Result",
  rap_list: "Rap",
  sales_summary_management: "集計",
  sales_summary_list: "Sales Summary",
  transport_operator_management: "運送会社管理",
  transport_operator_list: "Transport Operators",
  transport_operator_add: "Add Transport Operators",
  transport_operator_detail: "Transport Operators Detail",
  role_management: "システム管理",
  role_management_list: "Role Management",
  user_management_list: "User",
  user_management_add: "A New User",
  user_management_detail: "User Detail",
  mail_template_list: "Mail Template",
  mail_template_add: "A New Mail Template",
  vehicle_map: "車両集中指令センター",
  allocation_request: "配車管理",
}
export const TXT_FIELD_ORDER = { "m_customers.id": "顧客ID = ", "m_customers.integrated_customer_id": "統合顧客ID = ", "m_customers.customer_tel_idx": "TEL = ", "m_customers.contact_tel": "連絡先番号 = ", "m_customers.customer_last_name_kana": "フリガナ セイ = ", "m_customers.customer_mid_name_kana": "フリガナ ミドル = ", "m_customers.customer_first_name_kana": "フリガナ メイ = ", "m_customers.customer_last_name": "氏名 姓 = ", "m_customers.customer_mid_name": "氏名 ミドル = ", "m_customers.customer_first_name": "氏名 名 = ", "m_customers.zip_cd": "住所 郵便番号 = ", "m_customers.pref_cd": { "name": "住所 都道府県 = ", "source": "prefecture", "type": "list_post_city_code" }, "m_customers.city_nm": "住所 市区町村 = ", "m_customers.address": "住所 番地 = ", "m_customers.building": "住所 建物名 = ", "m_customers.customer_email": "Email = ", "m_customers.company_name": "会社名 = ", "m_customers.is_corporation_customer": "法人顧客区分 = ", "m_customers.sns_type": { "name": "ソーシャル区分 = ", "source": "common", "type": "sns_type" }, "m_customers.sns_id": "ソーシャルID = ", "m_customers.customer_status": { "name": "会員ステータス = ", "source": "common", "type": "customer_status" }, "m_customers.customer_rank": { "name": "顧客ランク = ", "source": "common", "type": "customer_rank" }, "m_customers.registration_date": { "name": "登録日 = ", "source": "date" }, "m_customers.use_count": "利用回数 = ", "m_customers.cancel_count": "キャンセル回数 = ", "m_customers.trouble_count": "トラブル回数 = ", "m_customers.last_use_day": { "name": "最終利用日 = ", "source": "date" }, "m_customers.agencys_id": { "name": "代理店 = ", "source": "common", "type": "agency" }, "m_customers.sex": { "name": "顧客性別 = ", "source": "common", "type": "sex" }, "m_companys.id": "企業ID = ", "m_companys.company_name_kana": "カナ = ", "m_companys.company_name": "会社名 = ", "m_companys.another_name": "別呼称 = ", "m_companys.tel": "企業TEL = ", "m_companys.zip_cd": "郵便番号 = ", "m_companys.pref_cd": { "name": "都道府県 = ", "source": "prefecture", "type": "list_post_city_code" }, "m_companys.city_nm": "市区町村 = ", "m_companys.town_area": "番地 = ", "m_companys.building": "建物名 = ", "m_companys.company_kind": { "name": "法人区分 = ", "source": "common", "type": "company_kind" }, "m_companys.president": "代表者 = ", "m_companys.president_kana": "代表者カナ = ", "m_companys.capital": "資本金 = ", "m_companys.foundation_date": { "name": "設立日 = ", "source": "date" }, "m_companys.type_of_industry": "業種 = ", "m_companys.url": "URL = ", "m_companys.fax": "FAX = ", "m_companys.note ": "メモ = ", "m_company_staffs.no": "No = ", "m_company_staffs.staff_name": "担当者名 = ", "m_company_staffs.staff_name_kana": "担当者カナ = ", "m_company_staffs.sex": { "name": "性別 = ", "source": "common", "type": "sex" }, "m_company_staffs.approval": { "name": "決裁 = ", "source": "common", "type": "approval" }, "m_company_staffs.position": "役職 = ", "m_company_staffs.another_name": "呼称 = ", "m_company_staffs.tel": "連絡先 = ", "m_company_staffs.email": "Email = ", "m_company_staffs.remark": "備考 = ", "t_order_bill_info.address_name": "宛名 = ", "t_order_bill_info.zip_cd": "〒（郵便番号） = ", "t_order_bill_info.pref_cd": { "name": "〒（都道府県） = ", "source": "prefecture", "type": "list_post_city_code" }, "t_order_bill_info.city_nm": "〒（市区町村） = ", "t_order_bill_info.town_area": "〒（住所） = ", "t_order_bill_info.building": "〒（建物名） = ", "t_order_bill_info.bill_date": { "name": "請求発行日 = ", "source": "date" }, "t_orders.order_no": "申込No = ", "t_orders.receipt_name": "領収書宛名 = ", "t_orders.receipt_proviso": "但し書き = ", "t_contact_historys.create_at": { "name": "受付日 = ", "source": "date" }, "t_contact_historys.update_admin_id": { "name": "受付担当者 = ", "source": "user_admin", "type": "user_admin_list" }, "t_contact_historys.contact_kind": { "name": "対応区分 = ", "source": "common", "type": "contact_kind" }, "t_contact_historys.contact_means": { "name": "問合せ種別 = ", "source": "common", "type": "contact_means" }, "t_contact_historys.contact_status": { "name": "コンタクトステータス = ", "source": "common", "type": "contact_status" }, "t_contact_historys.use_kind": { "name": "利用目的 = ", "source": "common", "type": "use_kind" }, "t_contact_historys.use_airport_kind": { "name": "空港利用 = ", "source": "common", "type": "use_airport_kind" }, "t_contact_historys.order_channel": { "name": "経由チャネル = ", "source": "common", "type": "order_channel" }, "t_contact_historys.ng_kind": { "name": "NG理由 = ", "source": "top_category", "type": "top_category" }, "t_contact_historys.cancel_type": { "name": "キャンセル理由 = ", "source": "common", "type": "cancel_type" }, "t_contact_historys.vsn_content": "対応内容 = ", "t_contact_historys.order_id": "申込番号 = ", "t_contact_historys.order_no": "申込No = ", "t_order_details.results_boarding_distance": "距離 = ", "t_order_details.ride_point_space_info": "乗車場所車寄せ = ", "t_order_details.drop_point_space_info": "降車場所車寄せ = ", "t_order_details.order_detail_no": "明細No = ", "t_order_details.ride_day": { "name": "運行日 = ", "source": "date" }, "t_order_details.ride_time": "時刻 = ", "t_order_details.complete_date": { "name": "運行終了日時 = ", "source": "date" }, "t_order_details.results_ride_time": "時間 = ", "t_order_details.ride_detail": "乗車場所 = ", "t_order_details.drop_detail": "降車場所 = ", "t_order_details.is_pointlist": { "name": "経由地有無 = ", "source": "yes_no" }, "t_order_details.total_detail_amount": "利用料金 = ", "t_order_details.total_option_service_amount": "オプション金額 = ", "t_order_details.ride_person_count": "大人 = ", "t_order_details.ride_person_children_count": "子供 = ", "t_order_details.children_sheet_cnt": "チャイルドシート = ", "t_order_details.ride_case_count": "スーツケース数 = ", "t_order_details.baggage": "荷物 = ", "t_order_details.transport_operator_id": "運送会社 = ", "t_order_details.transport_operators_id": "運送会社 = ", "t_order_details.vehicle_no": "車両No = ", "t_order_details.vehicle_name": "車両名 = ", "t_orders.receipt_date": { "name": "領収発行日 = ", "source": "date" } };

export const VAL_DEFAULT = {
  ORDER_ACCEPT: '01',
  ALLOCATION_REQUEST: "S0304"
}

export const YN_FIELD = [
  { value: '1', name: '有' },
  { value: '0', name: '無' }
]

export const DN_FIELD = [
  { value: '1', name: '済み' },
  { value: '0', name: '無' }
]

export const getErrorMessage = (key, params = {}) => {
  let str = ERR_MSG[key] ? ERR_MSG[key] : null;
  if (params) {
    if (params) {
      forEach(params, (value, key) => {
        let pattern = new RegExp(`{${key}}?`, "gi");
        str = str.replace(pattern, `${value}`);
      });
    }
  }

  return str;
}
