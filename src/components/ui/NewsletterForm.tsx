'use client';

import Script from 'next/script';
import styles from './NewsletterForm.module.css';

interface NewsletterFormProps {
    compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
    return (
        <div className={`${styles.formContainer} ${compact ? styles.compact : ''}`}>
             <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup">
                    <form action="https://thedinnernovel.us18.list-manage.com/subscribe/post?u=b4e3f94214e42dbd325a9101d&amp;id=35e2f2726d&amp;f_id=0000b0e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            {!compact && <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>}
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required defaultValue="" placeholder="Your email address" />
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                            </div>
                            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                <input type="text" name="b_b4e3f94214e42dbd325a9101d_35e2f2726d" tabIndex={-1} defaultValue="" />
                            </div>
                            <div className="optionalParent">
                                <div className="clear foot">
                                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="lazyOnload" />
            <Script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" strategy="lazyOnload" />
            <Script id="mailchimp-setup" strategy="lazyOnload">
                {`
                (function($) {
                    window.fnames = new Array(); 
                    window.ftypes = new Array();
                    fnames[0]='EMAIL';ftypes[0]='email';
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
                `}
            </Script>
        </div>
    );
}
