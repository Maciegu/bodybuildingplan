import './Footer.css';

const terms = ['privacy policy','terms of use','refund policy','contact us'];

const listTerms = terms.map((term) => <a href="#">{term}</a>);

export default function Footer(){
    return(
        <div class="footer">
            <div class="inner-footer">
                <div class="footer-name">
                    <span>BODYBUILDING PLANER</span>
                </div>
                <div class="footer-terms">
                    {listTerms}
                </div>         
            </div>
        </div>
    )
};