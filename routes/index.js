var express = require('express');
var router = express.Router();

const nameList = [
{'id': 1, 'name':'DevOps', 'description':'An evolution of agile development, ensuring the full test of each stage of development', 'ref': 'Xray (12 April 2021) Get started with DevOps: principles, best practices and tips, Xray, accessed 23 July 2023. https://www.getxray.app/blog/get-started-with-devops-principles-best-practices-and-tips?source=google&network=g&campaign={campaign}&adgroup={adgroup}&keyword=&placement=&creative=615600538015&utm_medium=cpc&utm_term=&utm_campaign=GG_SEARCH_TOFU+%5BXRAY%5D+-+DSA+Blog+Posts+-+AUS%2BNZ&utm_source=adwords&hsa_acc=9970092548&hsa_cam=17990097516&hsa_grp=141627448244&hsa_ad=615600538015&hsa_src=g&hsa_tgt=dsa-1391637226778&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad=1&gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zOmPEdW7_dHenseeW__dkWZUyY8GtlSvyP1A_kWB3JE_ZLi1TnTmvAaAsjqEALw_wcB'},
{'id': 2, 'name':'UX Design', 'description':'the process of design teams implementing products to provide meaningful experiences to users', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 3, 'name':'Deployable', 'description':'usable', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 4, 'name':'Workflow', 'description':'the sequence of industrial, administrative, or other processes through which a piece of work passes from initiation to completion', 'ref': 'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 5, 'name':'Downstream', 'descripton':'Downstream', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 6, 'name':'Back-flow', 'description':'Back-flow', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 7, 'name':'context-switching', 'description':'context-switching', 'ref': 'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 8, 'name':'Over-engineered', 'descripton':'Over-engineered', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 9, 'name':'SDLC', 'description':'SDLC', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'},
{'id': 10, 'name':'Agile', 'description':'Agile', 'ref':'Interaction Design Foundation (n.d.) User Experience (UX) Design, Interaction Design Foundation, accessed 23 July 2023. https://www.interaction-design.org/literature/topics/ux-design'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'my website showing a collection of DevOps terms and their brief descriptions.', names: nameList});
});

module.exports = router;
