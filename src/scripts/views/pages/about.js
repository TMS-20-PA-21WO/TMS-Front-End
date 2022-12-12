import CONFIG from '../../global/config';

const About = {
  async render() {
    return `
<div class="container text-center bg-transparent">
    <h1>Meet Our Crew</h1>
    <img src="${CONFIG.DIVIDER_PATH}" class="img img-fluid" alt="Divider">
    <p>
        WE SET OUR MINDS TO SUPPORT AND GUIDE OUR CLIENTS AS WELL AS TO CURATE EACH EVENT. 
        WE ARE A CREATIVE, BRIGHT TEAM OF MULTI-LINGUAL PLANNERS WHO PLACE INTEGRITY, 
        CREATIVITY AND ATTENTION TO DETAIL AT THE CORE OF ALL WE DO.
    </p><br>

    <div class="row">
        <div class="col-lg-4">
            <div class="container text-center bg-transparent, sppb-divider sppb-divider-border">
                <p>
                    <img src="${CONFIG.CREW_LUKMAN}" class="img img-fluid" alt="Lukman">
                </p>
                <p style="font-size: 20px; font-weight: bold">Lukman</p>
                <p style="font-size: 15px; opacity: 0.7">Crew</p>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="container text-center bg-transparent, sppb-divider sppb-divider-border">
                <p>
                    <img src="${CONFIG.CREW_PUTRI}" class="img img-fluid" alt="Putri">
                </p>
                <p style="font-size: 20px; font-weight: bold">Putri</p>
                <p style="font-size: 15px; opacity: 0.7">Crew</p>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="container text-center bg-transparent, sppb-divider sppb-divider-border">
                <p>
                <img src="${CONFIG.CREW_RAHMA}" class="img img-fluid" alt="Rahma">
                </p>
                <p style="font-size: 20px; font-weight: bold">Rahma</p>
                <p style="font-size: 15px; opacity: 0.7">Crew</p>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="container text-center bg-transparent, sppb-divider sppb-divider-border">
                <p>
                    <img src="${CONFIG.CREW_YASIN}" class="img img-fluid" alt="Yasin">
                </p>
                <p style="font-size: 20px; font-weight: bold">Yasin</p>
                <p style="font-size: 15px; opacity: 0.7">Crew</p>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="container text-center bg-transparent, sppb-divider sppb-divider-border">
                <p>
                    <img src="${CONFIG.CREW_FAJAR}" class="img img-fluid" alt="Fajar">
                </p>
                <p style="font-size: 20px; font-weight: bold">Fajar</p>
                <p style="font-size: 15px; opacity: 0.7">Crew</p>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="container text-center bg-transparent, sppb-divider sppb-divider-border">
                <p>
                    <img src="${CONFIG.CREW_EKO}" class="img img-fluid" alt="Eko">
                </p>
                <p style="font-size: 20px; font-weight: bold">Eko</p>
                <p style="font-size: 15px; opacity: 0.7">Crew</p>
            </div>
        </div>

    </div>
</div>

      `;
  },

  //   async afterRender() {

  //   },
};

export default About;
