const style = '@keyframes awn-fade-in{0%{opacity:0}to{opacity:1}}@keyframes awn-fade-out{0%{opacity:1}to{opacity:0}}@keyframes awn-slide-right{0%{left:100%;opacity:0}to{left:0;opacity:1}}@keyframes awn-slide-left{0%{opacity:0;right:100%}to{opacity:1;right:0}}@keyframes awn-bar{0%{right:100%}to{right:0}}.awn-popup-loading-dots,.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{animation-fill-mode:both;animation:awn-loading-dots 1s ease-in-out infinite;background:#fff;border-radius:50%;height:6px;width:6px}.awn-popup-loading-dots{animation-delay:-.16s;color:#fff;display:inline-block;margin-left:24px;position:relative}.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{content:"";position:absolute;top:0}.awn-popup-loading-dots:before{animation-delay:-.32s;left:-16px}.awn-popup-loading-dots:after{left:16px}@keyframes awn-loading-dots{0%,80%,to{box-shadow:0 0 0 0}40%{box-shadow:0 0 0 2px}}#awn-popup-wrapper{align-items:center;animation-fill-mode:both;animation-name:awn-fade-in;animation-timing-function:ease-out;background:rgba(0,0,0,.7);bottom:0;display:flex;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;z-index:99999}#awn-popup-wrapper.awn-hiding{animation-name:awn-fade-out}#awn-popup-wrapper .awn-popup-body{background:#fff;border-radius:6px;font-size:14px;max-width:500px;min-width:320px;padding:24px;position:relative;word-break:break-word}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm{align-items:center;display:flex;flex-direction:column}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm .fa{color:#c26700;font-size:44px}#awn-popup-wrapper .awn-popup-body.awn-popup-async-block{background:transparent;color:#fff;font-size:32px;font-weight:700;text-align:center}#awn-popup-wrapper .awn-popup-title{font-size:14px;font-weight:700;margin-top:8px;text-transform:uppercase}#awn-popup-wrapper .awn-buttons{display:flex;justify-content:space-between;margin-top:24px;width:100%}#awn-popup-wrapper .awn-buttons .awn-btn{border:0;border-radius:4px;color:#fff;font-size:14px;font-weight:700;line-height:32px;transition:background .2s linear;width:45%}#awn-popup-wrapper .awn-buttons-1 .awn-btn{width:100%}#awn-popup-wrapper .awn-buttons .awn-btn-success{background:#40871d}#awn-popup-wrapper .awn-buttons .awn-btn-success:hover{background:#367218}#awn-popup-wrapper .awn-buttons .awn-btn-cancel{background:#1c76a6}#awn-popup-wrapper .awn-buttons .awn-btn-cancel:hover{background:#186690}#awn-toast-container{bottom:24px;box-sizing:border-box;position:fixed;right:24px;z-index:99998}#awn-toast-container.awn-top-left,#awn-toast-container.awn-top-right{bottom:auto;top:24px}#awn-toast-container.awn-top-left .awn-toast:first-child,#awn-toast-container.awn-top-right .awn-toast:first-child{margin-top:16px}#awn-toast-container.awn-bottom-left,#awn-toast-container.awn-top-left{left:24px;right:auto}#awn-toast-container.awn-bottom-left .awn-toast,#awn-toast-container.awn-top-left .awn-toast{animation-name:awn-slide-left;right:100%}#awn-toast-container.awn-bottom-left .awn-toast.awn-hiding,#awn-toast-container.awn-top-left .awn-toast.awn-hiding{right:0}#awn-toast-container.awn-bottom-right .awn-toast,#awn-toast-container.awn-top-right .awn-toast{animation-name:awn-slide-right;left:100%}#awn-toast-container.awn-bottom-right .awn-toast.awn-hiding,#awn-toast-container.awn-top-right .awn-toast.awn-hiding{left:0}.awn-toast{animation-fill-mode:both;animation-timing-function:linear;background:#ebebeb;border-radius:6px;color:gray;cursor:pointer;font-size:14px;margin-top:16px;opacity:0;overflow:hidden;position:relative;width:320px}.awn-toast-content{word-break:break-word}.awn-toast-label{color:gray;display:block;font-size:18px;text-transform:uppercase}.awn-toast-icon{align-items:center;bottom:0;display:flex;justify-content:flex-end;position:absolute;right:16px;top:6px}.awn-toast-icon .fa{color:gray;font-size:44px}.awn-toast-wrapper{border:2px solid #d1d1d1;border-radius:6px;padding:22px 88px 16px 16px}.awn-toast-progress-bar{height:6px;left:0;position:absolute;right:0;top:0}.awn-toast-progress-bar:after{animation-duration:inherit;animation-fill-mode:both;animation-name:awn-bar;animation-timing-function:linear;background:gray;content:" ";height:6px;position:absolute;right:100%;top:0;width:100%}.awn-toast.awn-toast-progress-bar-paused .awn-toast-progress-bar:after{animation-play-state:paused}.awn-toast.awn-hiding{animation-name:awn-fade-out!important}.awn-toast.awn-toast-success{background:#dff8d3;color:#40871d}.awn-toast.awn-toast-success .awn-toast-wrapper{border-color:#a7d590}.awn-toast.awn-toast-success .fa,.awn-toast.awn-toast-success b{color:#40871d}.awn-toast.awn-toast-success .awn-toast-progress-bar:after{background:#40871d}.awn-toast.awn-toast-info{background:#d3ebf8;color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-wrapper{border-color:#9fd3ef}.awn-toast.awn-toast-info .fa,.awn-toast.awn-toast-info b{color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-progress-bar:after{background:#1c76a6}.awn-toast.awn-toast-alert{background:#f8d5d3;color:#a92019}.awn-toast.awn-toast-alert .awn-toast-wrapper{border-color:#f0a29d}.awn-toast.awn-toast-alert .fa,.awn-toast.awn-toast-alert b{color:#a92019}.awn-toast.awn-toast-alert .awn-toast-progress-bar:after{background:#a92019}.awn-toast.awn-toast-warning{background:#ffe7cc;color:#c26700}.awn-toast.awn-toast-warning .awn-toast-wrapper{border-color:#ffc480}.awn-toast.awn-toast-warning .fa,.awn-toast.awn-toast-warning b{color:#c26700}.awn-toast.awn-toast-warning .awn-toast-progress-bar:after{background:#c26700}[class^=awn-]{box-sizing:border-box}';
export {
  style as default
};
//# sourceMappingURL=entry-styles-5.mjs-JqyrBIbF.js.map
