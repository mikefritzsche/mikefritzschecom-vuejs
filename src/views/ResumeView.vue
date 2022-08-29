<template>
  <div class="card-container">

    <div>
      <div class="resume">
        <el-row>
          <el-col class="links" :span="6">
            <ul style="position: sticky; top: 10px;">
              <li
                  v-for="section in sections"
                  :key="section"
                  @click="handleSectionClick"
              >
                {{ section }}
              </li>
            </ul>
          </el-col>
          <el-col :span="18">
            <div class="resume--section" ref="Summary">
              <el-card>
                <template #header>
                  <h3>Summary</h3>
                </template>
                <p>
                  Expert Lead Web Developer specializing in front-end development. Experienced with all stages of
                  development cycle for dynamic web projects.
                </p>

                <h4 class="h4">Languages, frameworks and libraries</h4>
                <p>
                  Javascript, JSON, Vue, Vuex, Vue-Router, KnockoutJS, AmChart, Nodejs, HTML, SASS/LESS, CSS, PHP,
                  jQuery,
                  Lodash, Underscore, Zurb's Foundation, MySQL
                </p>
                <h4 class="h4">Tools, Apps and Technologies</h4>
                <p>
                  Gitlab, Docker, Webpack, Git, Grunt/Gulp, Bash, SSH, Photoshop, Agile methodologies/Scrum,
                  WebStorm/PHPStorm, SublimeText, Atom, VisualStudio, Note++, Vim, Apache, Nginx, MySQL Workbench
                  Project
                </p>
                <h4 class="h4">Types</h4>
                <p>
                  Interactive UI development, Data Visualization, Dashboard UI development, REST API, API development,
                  UI
                  prototyping, UI/UX Design, Responsive UI, Live Video Streaming, Linux administration, SEO, Database
                  Development
                </p>
              </el-card>
            </div>

            <div class="resume--section" ref="Skills">
              <el-card>
                <template #header>
                  <h3>Skills</h3>
                </template>

                <h4 class="h4">Focus Areas</h4>
                <p>
                  Vue, Vuex, Vue Router, Webpack, PHP, Node, TDD Jest/Chai, MySQL/MariaDB, Grunt/Gulp, Git, Docker,
                  ES2015+,
                  SASS/SCSS, HTML5, CSS3, Foundation 6
                </p>

                <h4 class="h4">Additional Exposure</h4>
                <p>GraphQL, React, React Native, Redux, MongoDB, Knockoutjs, Bootstrap, Go</p>

              </el-card>
            </div>
            <div class="resume--section" ref="Experience">
              <el-card>
                <h3 id="experience" variant='h5' component='h3'>Experience</h3>
                <div variant='h6' component='h4'>Senior Frontend Engineer | 11/2015 - Current</div>
                <div variant='h7' component='h5'>Kochava - Sandpoint, ID</div>
                <ul>
                  <li>
                    Develop API driven, customer facing, single page web application (SPA) of Kochava's mobile ad
                    attribution, analytics, data marketplace and marketing platform using a Vue, Vuex, Vue Router, SASS,
                    Foundation 6,
                    and ECMA2015+ stack.
                  </li>
                  <li>
                    Visualize large amounts of data, i.e. time series data, in various types of charts and graphs, or
                    tabular data formats providing customers a clean, easy to understand insight into their marketing
                    campaign performance.
                    Create a development, staging and production deployment solution with Webpack, Grunt and Docker in a
                    CI setup.
                  </li>
                  <li>
                    Collaborate with project and product managers to set goals and scope projects.
                  </li>
                  <li>
                    Work with junior developers to develop skill sets.
                  </li>
                  <li>
                    Work with backend developers to develop json schemas for APIs.
                  </li>

                  <li>
                    Initiate code reviews of new product code and updates to existing product.
                  </li>

                  <li>
                    Brought mock-ups to life with HTML, CSS and JavaScript.
                  </li>

                  <li>
                    Reviewed information and elements regularly on websites and pages for accuracy and functionality.
                  </li>

                  <li>
                    Participated in pre-project analysis and technical assessments to develop user-friendly interface
                    and correct functionality.
                  </li>

                  <li>Troubleshooting, testing and fixing issues before software deployment.</li>
                </ul>

                <div variant='h6' component='h4'>Freelance UI Developer | 07/2011 - 09/2014</div>
                <div variant='h7' component='h5'>Keokee Co. Publishing - Sandpoint, ID</div>
                <ul>
                  <li>
                    Worked with technical leads, engineers and designers to develop dynamic client-side web applications
                    across various areas of business.
                  </li>
                  <li>
                    Developed custom web application interfaces with HTML and CSS to meet client requirements.
                  </li>
                  <li>
                    Redesigned and implemented complete web applications to meet web and industry standards.
                  </li>
                  <li>
                    Wrote application level code to interact with backend code.
                  </li>
                  <li>
                    Identified technology solution alternatives in line with specific client objectives and challenges.
                  </li>
                  <li>
                    Converted PSD mockups into pure hand-written HTML and CSS pages.
                  </li>
                  <li>
                    Designed, built and maintained websites using authoring or scripting languages, content creation
                    tools and digital media.
                  </li>
                  <li>
                    Implemented searchable indices for webpage content.
                  </li>
                </ul>

                <div variant='h6' component='h4'>Freelance UI Developer | 01/2012 - 06/2014</div>
                <div variant='h7' component='h5'>Litehouse Foods - Sandpoint, ID</div>
                <ul>
                  <li>
                    Developed custom web application interfaces with HTML and CSS to meet client requirements.
                  </li>
                  <li>
                    Wrote application level code to interact with backend code.
                  </li>
                  <li>
                    Identified technology solution alternatives in line with specific client objectives and challenges.
                  </li>
                  <li>
                    Converted PSD mockups into pure hand-written HTML and CSS pages.
                  </li>
                  <li>
                    Designed, built and maintained websites using authoring or scripting languages, content creation
                    tools
                    and digital media.
                  </li>
                </ul>

                <div variant='h6' component='h4'>Freelance UI Developer | 05/2005 - 07/2012</div>
                <div variant='h7' component='h5'>Mountain Sky Publishing - Sandpoint, ID</div>
                <ul>
                  <li>
                    Utilized a custom CMS platform built on PHP, MySQL, HTML/CSS to develop an online in-room
                    information
                    website for select hotels.
                  </li>
                  <li>
                    Developed custom web application interfaces with HTML and CSS to meet client requirements.
                  </li>
                  <li>
                    Wrote application level code to interact with backend code.
                  </li>
                </ul>

                <div variant='h6' component='h4'>Freelance UI Developer | 06/2005 - 06/2010</div>
                <div variant='h7' component='h5'>Sandpoint Marketing - Sandpoint, ID</div>

                <ul>
                  <li>
                    Utilized a custom content management software solution I built using PHP, MySQL, HTML, CSS to build
                    websites
                    for real estate agents.
                    Developed custom web application interfaces with HTML and CSS to meet client requirements.
                    Redesigned
                    and
                    implemented complete web applications to meet web and industry standards. Wrote application level
                    code
                    to interact with backend code.
                    Converted PSD mockups into templates used in a custom CMS.
                  </li>
                </ul>

                <div variant='h6' component='h4'>
                  Media Specialist/Pastoral Assistant | 01/1995 - 02/2005
                </div>
                <div variant='h7' component='h5'>
                  Abundant Life Fellowship Church - Roseville, CA
                </div>

                <ul>
                  <li>
                    Trained media team members and organized staff teams and tasks. Operated control consoles to
                    regulate
                    volume
                    levels and sound quality.
                  </li>
                  <li>
                    Recorded, edited and mixed instrumental and vocal tracks and minimized unwanted sounds.
                  </li>
                  <li>
                    Managed setup and tear-down of sound and music equipment before and after performances to promote
                    efficient
                    workflow.
                  </li>
                  <li>
                    Processed audio to meet quality standards and played and mixed music for live events. Utilized
                    recording
                    equipment to record music and speech.
                  </li>
                  <li>
                    Separated instruments, vocals, and other sounds, and combined sounds during mixing or postproduction
                    stage.
                  </li>
                  <li>
                    Reproduced and duplicated sound recordings from original recording media by using sound editing and
                    duplication equipment.
                  </li>
                  <li>
                    Played backing tracks and special effects during live events.
                  </li>
                  <li>
                    Worked with church leaders, staff and ministry teams to achieve growth of church and to foster
                    positive
                    community impact.
                  </li>
                  <li>
                    Visited, counseled and prayed with church members to provide pastoral care. Reached out to
                    unchurched,
                    new
                    residents or inactive church members.
                  </li>
                  <li>
                    Led outreach initiatives to reach out to unchurched, inactive or new residents in community.
                  </li>
                  <li>
                    Leveraged proficiency in Adobe InDesign, Photoshop and Illustrator to design email blasts, catalogs,
                    posters and other
                    promotional materials.
                  </li>
                  <li>
                    Developed, designed, laid out and produced variety of technical illustrations for brochures, banners
                    and
                    signs.
                  </li>
                  <li>
                    Selected colors and themes while adding functionality to create new designs. Generated digital image
                    files
                    for
                    use in digital and traditional printing.
                  </li>
                  <li>
                    Designed new, on-brand visual elements focusing on concept and messaging.
                  </li>
                  <li>
                    Directed advertisement, banner and signage projects from conceptualization to final delivery.
                  </li>
                  <li>
                    Formatted print and web application designs and media to deliver production-ready graphics.
                  </li>
                  <li>
                    Maintained company website and updated with newly designed products and corporate announcements.
                  </li>
                  <li>
                    Prepared branding packages for point of purchase displays, marketing materials and product packages.
                  </li>
                  <li>
                    Enhanced existing designs with new layouts, graphics and content.
                  </li>
                  <li>
                    Enhanced design process by offering multiple solutions in conceptual models, layout and typography.
                  </li>
                </ul>
              </el-card>
            </div>

            <div class="resume--section" ref="Education">
              <el-card>
                <h3 id="education" variant='h5' component='h3'>Education and Training</h3>
                <div variant='h7' component='h5'>
                  Nevada Union - Grass Valley, CA | High School Diploma 06/1984
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResumeComponent',
  methods: {
    goto(refName) {
      console.log('goto refName`: ', this.$refs[refName])
      // return
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo({top, left: 0, behavior: 'smooth'});
    },
    handleSectionClick(e) {
      console.log('section click: ', e.target.textContent.toLowerCase())
      this.goto(e.target.textContent)
      // window.location.replace(`/#${e.target.textContent.toLowerCase()}`)
    }
  }
}
</script>
<script setup>
const sections = [
  'Summary',
  'Skills',
  'Experience',
  'Education',
]

</script>
<style scoped lang="scss">
.resume {
  .links {
    background-color: darkorange;

    li {
      color: #fff;
      font-weight: bold;
    }
  }
}

h4 {
  font-size: var(--el-font-size-medium);
}

h3 {
  font-size: var(--el-font-size-large);
}

.card-container {
  padding: .8rem;
}

.resume--section {
  margin-bottom: 1rem;
}
</style>