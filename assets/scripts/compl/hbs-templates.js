this["Pluto"] = this["Pluto"] || {};
this["Pluto"]["Templates"] = this["Pluto"]["Templates"] || {};

this["Pluto"]["Templates"]["banner-person-img"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "assets/img/vectors/user.svg";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<span class=\"medium mono\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			<br />\r\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<span class=\"medium mono\">";
  if (helper = helpers.achievement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.achievement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			<br />\r\n			";
  return buffer;
  }

  buffer += "<div class=\"spiracle\">\r\n	<div class=\"anterior\">\r\n		<img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"image\">\r\n	</div>\r\n	<div class=\"posterior\">\r\n		<p class=\"white\">\r\n			<span class=\"bigger\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			<br />\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.achievement), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<span class=\"medium\">";
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n		</p>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  });

this["Pluto"]["Templates"]["card-cntr"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "bigger";
  }

function program3(depth0,data) {
  
  
  return "big mono";
  }

function program5(depth0,data) {
  
  
  return "\r\n		<p class=\"msg mono entity-ctrl\">\r\n			<span class=\"bb-cntr-edt big center left\"><span class=\"fa fa-edit fa-fw\"></span> Edit</span>\r\n			<span class=\"bb-cntr-del big center left\"><span class=\"fa fa-times-circle fa-fw\"></span> Delete</span>\r\n		</p>\r\n		";
  }

function program7(depth0,data) {
  
  
  return "medium";
  }

function program9(depth0,data) {
  
  
  return "small";
  }

function program11(depth0,data) {
  
  
  return "big";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "- ";
  if (helper = helpers.pincode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pincode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\r\n			<p class=\"msg t-right\">\r\n				<a href=\"\">view on <span class=\"fa fa-google fa-fw\"></span> Maps <span class=\"fa fa-angle-right fa-fw\"></span></a>\r\n			</p>\r\n			";
  }

function program17(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.contactNum1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactNum1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program19(depth0,data) {
  
  
  return "N.A.";
  }

function program21(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.contactNum2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactNum2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<hr />\r\n		<div class=\"srch-result-cell center\">\r\n			<p class=\"big msg ellipsis\">\r\n				<a href=\"../"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n			</p>\r\n			<span class=\"dp-tiny dp-tiny-medi\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.profileImg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"logo\">\r\n			</span>\r\n		</div>\r\n		";
  return buffer;
  }

  buffer += "<div class=\"srch-result-wrapper inline-blk\">\r\n	<div class=\"srch-result srch-result-cntr\">\r\n		<a href=\"centers?highlight=";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"srch-result-header srch-result-cell js-entity-share\" data-pid=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " center white\">";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n		</a>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditable), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<div class=\"srch-result-cell t-left\">\r\n			<p class=\"msg upper ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"underline\">Address</span></p>\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n				<br />\r\n				";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pincode), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				<br />\r\n				";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n			</p>\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mapInfo), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n		<hr />\r\n		<div class=\"srch-result-cell t-left\">\r\n			<p class=\"msg upper ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"underline\">Contact details</span></p>\r\n			<ul class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				<li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contactNum1), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n				<li>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contactNum2), {hash:{},inverse:self.program(19, program19, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n			</ul>\r\n		</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.owner), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["card-crse"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program5(depth0,data) {
  
  
  return "bigger";
  }

function program7(depth0,data) {
  
  
  return "big mono";
  }

function program9(depth0,data) {
  
  
  return "big";
  }

function program11(depth0,data) {
  
  
  return "medium";
  }

function program13(depth0,data) {
  
  
  return "\r\n		<p class=\"msg mono entity-ctrl\">\r\n			<span class=\"bb-crse-edt big center left\"><span class=\"fa fa-edit fa-fw\"></span> Edit</span>\r\n			<span class=\"bb-crse-del big center left\"><span class=\"fa fa-times-circle fa-fw\"></span> Delete</span>\r\n		</p>\r\n		";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div class=\"srch-result-cell\">\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(16, program16, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ellipsis js-crse-descr\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			<p class=\"t-right medium\"><a href=\"#\" class=\"js-toggle-descr\">show more</a></p>\r\n		</div>\r\n		<hr />\r\n		";
  return buffer;
  }
function program16(depth0,data) {
  
  
  return "small";
  }

function program18(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "title=\"";
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				<li>";
  if (helper = helpers.examName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.examName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n				<ul>\r\n					";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subjects), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</ul>\r\n				";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n						<li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\r\n					";
  return buffer;
  }

function program25(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		<div class=\"srch-result-cell white batch-head\">\r\n			<div class=\"";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.highlighted), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " inline-blk\" style=\"width: 80%\">\r\n				<p style=\"margin-bottom: 10px\"><span class=\"underline\">Batch #"
    + escapeExpression((helper = helpers.incr || (depth1 && depth1.incr),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "incr", (data == null || data === false ? data : data.index), options)))
    + "</span></p>\r\n				Start date - "
    + escapeExpression((helper = helpers.getDate || (depth0 && depth0.getDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dateStart), options) : helperMissing.call(depth0, "getDate", (depth0 && depth0.dateStart), options)))
    + "\r\n				<br />\r\n				Duration - "
    + escapeExpression((helper = helpers.courseDur || (depth0 && depth0.courseDur),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dur), (depth0 && depth0.durUnit), options) : helperMissing.call(depth0, "courseDur", (depth0 && depth0.dur), (depth0 && depth0.durUnit), options)))
    + "\r\n				<br />\r\n				<span class=\"big mono\">"
    + escapeExpression((helper = helpers.courseProgress || (depth0 && depth0.courseProgress),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dateStart), (depth0 && depth0.dur), options) : helperMissing.call(depth0, "courseProgress", (depth0 && depth0.dateStart), (depth0 && depth0.dur), options)))
    + "%</span> complete\r\n			</div><!--\r\n			--><div class=\"inline-blk\" style=\"width: 20%\">\r\n				<p class=\"center\" style=\"padding-top: 20px\">\r\n					<span class=\"fa fa-angle-down fa-2x\" style=\"vertical-align: middle\"></span>\r\n				</p>\r\n			</div>\r\n			<div class=\"course-progress-bar\">\r\n				<div style=\"width: "
    + escapeExpression((helper = helpers.courseProgress || (depth0 && depth0.courseProgress),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dateStart), (depth0 && depth0.dur), options) : helperMissing.call(depth0, "courseProgress", (depth0 && depth0.dateStart), (depth0 && depth0.dur), options)))
    + "%\"></div>\r\n			</div>\r\n		</div><!-- batch head -->\r\n		<div class=\"batch-content\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.isEditable), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = (helper = helpers.isAllFalsy || (depth0 && depth0.isAllFalsy),options={hash:{},inverse:self.programWithDepth(30, program30, data, depth1),fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.centers), (depth0 && depth0.slots), (depth0 && depth0.isDirectAdmssn), (depth0 && depth0.dateAdmssnExam), (depth0 && depth0.regDateStart), (depth0 && depth0.regDateEnd), (depth0 && depth0.fee), options) : helperMissing.call(depth0, "isAllFalsy", (depth0 && depth0.centers), (depth0 && depth0.slots), (depth0 && depth0.isDirectAdmssn), (depth0 && depth0.dateAdmssnExam), (depth0 && depth0.regDateStart), (depth0 && depth0.regDateEnd), (depth0 && depth0.fee), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div><!-- batch content -->\r\n		<input type=\"submit\" class=\"bb-btch-sve none btBatchSave_";
  if (helper = helpers.batchId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.batchId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"msg mono entity-ctrl\">\r\n				<span class=\"bb-btch-edt big center left\" data-batch-id=\"";
  if (helper = helpers.batchId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.batchId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"fa fa-edit fa-fw\"></span> Edit</span>\r\n				<span class=\"bb-btch-del big center left\" data-batch-id=\"";
  if (helper = helpers.batchId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.batchId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"fa fa-times-circle fa-fw\"></span> Delete</span>\r\n			</p>\r\n			";
  return buffer;
  }

function program28(depth0,data) {
  
  
  return "\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg center medium\">No other information available</p>\r\n			</div>\r\n			";
  }

function program30(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.centers), {hash:{},inverse:self.noop,fn:self.programWithDepth(31, program31, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.slots), {hash:{},inverse:self.noop,fn:self.programWithDepth(33, program33, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isDirectAdmssn), {hash:{},inverse:self.noop,fn:self.programWithDepth(37, program37, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = (helper = helpers.isAllFalsy || (depth0 && depth0.isAllFalsy),options={hash:{},inverse:self.program(41, program41, data),fn:self.program(39, program39, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.dateAdmssnExam), (depth0 && depth0.regDateStart), (depth0 && depth0.regDateEnd), options) : helperMissing.call(depth0, "isAllFalsy", (depth0 && depth0.dateAdmssnExam), (depth0 && depth0.regDateStart), (depth0 && depth0.regDateEnd), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fee), {hash:{},inverse:self.noop,fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program31(depth0,data,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg upper small\"><span class=\"underline\">Centers</span></p>\r\n				<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.highlighted), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression((helper = helpers.csv || (depth0 && depth0.csv),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.centers), options) : helperMissing.call(depth0, "csv", (depth0 && depth0.centers), options)))
    + "</p>\r\n			</div><!-- centers -->\r\n			";
  return buffer;
  }

function program33(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<hr />\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg upper small\"><span class=\"underline\">Slots</span></p>\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slots), {hash:{},inverse:self.noop,fn:self.programWithDepth(34, program34, data, depth3),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</div><!-- slots -->\r\n			";
  return buffer;
  }
function program34(depth0,data,depth4) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				<div class=\"srch-result-slot\">\r\n					<ul class=\"week\"><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "Su", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "Su", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Su</li><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "Mo", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "Mo", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Mo</li><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "Tu", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "Tu", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Tu</li><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "We", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "We", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">We</li><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "Th", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "Th", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Th</li><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "Fr", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "Fr", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Fr</li><!--\r\n						--><li class=\"center ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.workingDays), "Sa", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.workingDays), "Sa", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Sa</li>\r\n					</ul>\r\n					<p class=\"msg center mono ";
  stack1 = helpers['if'].call(depth0, (depth4 && depth4.highlighted), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression((helper = helpers.slotTime || (depth0 && depth0.slotTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.slotTimeStart), options) : helperMissing.call(depth0, "slotTime", (depth0 && depth0.slotTimeStart), options)))
    + " - "
    + escapeExpression((helper = helpers.slotTime || (depth0 && depth0.slotTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.slotTimeEnd), options) : helperMissing.call(depth0, "slotTime", (depth0 && depth0.slotTimeEnd), options)))
    + "</p>\r\n				</div>\r\n				";
  return buffer;
  }
function program35(depth0,data) {
  
  
  return "active-weekday-2";
  }

function program37(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.highlighted), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " t-right\"><span class=\"highlight-on-light\">Direct admission available</span></p>\r\n			</div><!-- direct admission -->\r\n			";
  return buffer;
  }

function program39(depth0,data) {
  
  
  return "\r\n			";
  }

function program41(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<hr />\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg upper small\"><span class=\"underline\">Important dates</span></p>\r\n				<table class=\"msg\" style=\"width: 100%\">\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dateAdmssnExam), {hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.regDateStart), {hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.regDateEnd), {hash:{},inverse:self.noop,fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</table>\r\n			</div><!-- imp dates -->\r\n			";
  return buffer;
  }
function program42(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n					<tr>\r\n						<td class=\"medium\">Admission exam</td>\r\n						<td class=\"big t-right\">"
    + escapeExpression((helper = helpers.getDate || (depth0 && depth0.getDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dateAdmssnExam), options) : helperMissing.call(depth0, "getDate", (depth0 && depth0.dateAdmssnExam), options)))
    + "</td>\r\n					</tr>\r\n					";
  return buffer;
  }

function program44(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n					<tr>\r\n						<td class=\"medium\">Start of registration</td>\r\n						<td class=\"big t-right\">"
    + escapeExpression((helper = helpers.getDate || (depth0 && depth0.getDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regDateStart), options) : helperMissing.call(depth0, "getDate", (depth0 && depth0.regDateStart), options)))
    + "</td>\r\n					</tr>\r\n					";
  return buffer;
  }

function program46(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n					<tr>\r\n						<td class=\"medium\">End of registration</td>\r\n						<td class=\"big t-right\">"
    + escapeExpression((helper = helpers.getDate || (depth0 && depth0.getDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regDateEnd), options) : helperMissing.call(depth0, "getDate", (depth0 && depth0.regDateEnd), options)))
    + "</td>\r\n					</tr>\r\n					";
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<hr />\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg upper small\"><span class=\"underline\">Fee</span></p>\r\n				<table class=\"msg\" style=\"width: 100%\">\r\n					<tr>\r\n						<td>Standard Fee</td>\r\n						<td class=\"big t-right\" style=\"width: 40%\">Rs. ";
  if (helper = helpers.fee) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fee); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/-</td>\r\n					</tr>\r\n					";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.discountCriteria), {hash:{},inverse:self.noop,fn:self.program(49, program49, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</table>\r\n			</div><!-- fee -->\r\n			";
  return buffer;
  }
function program49(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<tr>\r\n						<td>";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n						<td class=\"big t-right\" style=\"vertical-align: top\">";
  if (helper = helpers.val) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.val); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "% off</td>\r\n					</tr>\r\n					";
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<p class=\"msg mono entity-ctrl\">\r\n			<span class=\"bb-btch-add full-width big center js-modal-show\" data-target=\"#mdl-frm-btch\" data-parent=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">+ Add batch</span>\r\n		</p>\r\n		";
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<hr />\r\n		<div class=\"srch-result-cell center\">\r\n			<p class=\"big msg ellipsis\">\r\n				<a href=\"../";
  if (helper = helpers.instUsername) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instUsername); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-banner\" title=\"";
  if (helper = helpers.instName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.instName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n			</p>\r\n			<span class=\"dp-tiny dp-tiny-medi\">\r\n				<img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.instProfileImg), {hash:{},inverse:self.program(56, program56, data),fn:self.program(54, program54, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"logo\">\r\n			</span>\r\n		</div>\r\n		";
  return buffer;
  }
function program54(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.instProfileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instProfileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program56(depth0,data) {
  
  
  return "assets/img/logo-placeholder.jpg";
  }

  buffer += "<div class=\"srch-result-wrapper inline-blk\">\r\n	<div class=\"srch-result srch-result-crse\">\r\n		<a href=\"courses?highlight=";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"srch-result-header srch-result-cell js-entity-share\" data-owner=\"";
  if (helper = helpers.instUsername) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instUsername); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-pid=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				<span class=\"srch-result-crse-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			</p>\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " t-right\"><span class=\"highlight srch-result-crse-type\">";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></p>\r\n		</a>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditable), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.descr), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<div class=\"srch-result-cell\">\r\n			<p class=\"msg upper small\"><span class=\"underline\">Targets</span></p>\r\n			<ul class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.examSubjMap), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</ul>\r\n		</div>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.batches), {hash:{},inverse:self.noop,fn:self.programWithDepth(25, program25, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditable), {hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.instUsername), {hash:{},inverse:self.noop,fn:self.program(53, program53, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<input type=\"submit\" class=\"bb-crse-sve none btCourseSave_";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["card-inst"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<img class=\"lazy\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noLazy), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " alt=\"heroImg\">\r\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "src=\"";
  if (helper = helpers.heroImgThumb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.heroImgThumb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-original=\"";
  if (helper = helpers.heroImgThumb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.heroImgThumb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heroImg), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<img class=\"lazy\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noLazy), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " alt=\"heroImg\">\r\n			";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "src=\"";
  if (helper = helpers.heroImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.heroImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-original=\"";
  if (helper = helpers.heroImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.heroImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }
function program13(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program15(depth0,data) {
  
  
  return "assets/img/logo-placeholder.jpg";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-original=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<hr />\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg hint upper small\"><span class=\"underline\">Centers</span></p>\r\n				<ul class=\"msg\">\r\n					";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.centers), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</ul>\r\n			</div>\r\n			";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n					";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li><a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.courses)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " courses</a></li>\r\n					";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li><a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/team\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.team)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " staff</a></li>\r\n					";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li><a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/centers\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.centers)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " centers</a></li>\r\n					";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li><a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/reviews\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.reviews)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " reviews</a></li>\r\n					";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li><a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/gallery\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.gallery)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " photos</a></li>\r\n					";
  return buffer;
  }

function program32(depth0,data) {
  
  
  return "\r\n	    <div class=\"ribbon\">\r\n	        <div class=\"ribbon__banner\">\r\n	            <div class=\"ribbon__text\">Featured</div>\r\n	        </div>\r\n	    </div>\r\n		";
  }

  buffer += "<div class=\"srch-result-wrapper inline-blk\">\r\n	<div class=\"srch-result srch-result-inst t-left\">\r\n		<a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"srch-result-inst-header img-wrapper\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heroImgThumb), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</a>\r\n		<div class=\"srch-result-inst-main-details\">\r\n			<a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"srch-result-inst-dp\">\r\n				<img class=\"lazy\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noLazy), {hash:{},inverse:self.program(17, program17, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " alt=\"profileImg\">\r\n			</a>\r\n			<div class=\"srch-result-inst-unm-rating\">\r\n				<p class=\"msg ellipsis\">@"
    + escapeExpression((helper = helpers.processUnm || (depth0 && depth0.processUnm),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.username), options) : helperMissing.call(depth0, "processUnm", (depth0 && depth0.username), options)))
    + "</p>\r\n				<div class=\"rating-bar-wrapper\">\r\n					<div class=\"rating-bar rating-good\" style=\"width: "
    + escapeExpression((helper = helpers.getRating || (depth0 && depth0.getRating),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.aggRating), (depth0 && depth0.ratingType), options) : helperMissing.call(depth0, "getRating", (depth0 && depth0.aggRating), (depth0 && depth0.ratingType), options)))
    + "%\"></div>\r\n				</div>\r\n			</div>\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg big center srch-result-inst-name ellipsis\">\r\n					<span class=\"highlight-on-light\">\r\n						<a href=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n					</span>\r\n				</p>\r\n			</div>\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.centers), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<hr />\r\n			<div class=\"srch-result-cell\">\r\n				<p class=\"msg hint upper small\"><span class=\"underline\">Stats</span></p>\r\n				<ul class=\"msg\">\r\n					";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.courses), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.team), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.centers), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.reviews), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.gallery), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</ul>\r\n			</div>\r\n		</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isFeatured), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["gallery-img"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "title=\"";
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "alt=\"";
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  buffer += "<div class=\"gallery-img\">\r\n	<a href=\"../";
  if (helper = helpers.galleryImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.galleryImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"swipebox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.descr), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-pid=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<img ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.descr), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " src=\"../";
  if (helper = helpers.galleryImgThumb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.galleryImgThumb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n	</a>\r\n	<button class=\"gallery-img-edt js-modal-show js-non-owner\" data-target=\"#mdl-edit-photo\"><span class=\"fa fa-edit fa-fw\"></span></button>\r\n	<button class=\"gallery-img-del js-modal-show js-non-owner\" data-target=\"#mdl-img-del\"><span class=\"fa fa-times-circle fa-fw\"></span></button>\r\n	<a href=\"gallery?highlight=";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"gallery-img-share center white upper small js-entity-share\" data-pid=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">share</a>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["inst-achiever"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "../";
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "../assets/img/vectors/user.svg";
  }

function program5(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  
  return "...";
  }

  buffer += "<div class=\"tm-membr-cntnr inline-blk t-left\">\r\n	<div class=\"tm-membr\">\r\n		<input class=\"js-achvr-id\" type=\"hidden\" value=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<input class=\"js-achvr-img\" type=\"hidden\" value=\"";
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<div class=\"left tm-membr-img js-img-upload-ctrl\">\r\n			<img class=\"js-img-upload\" src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"achievers photo\" data-upload-type=\"ACHIEVERS_IMAGE\" data-owner=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			<button class=\"btLogoUpload\"><span class=\"fa fa-upload fa-fw\"></span> Upload</button>\r\n			<button class=\"btLogoRemove js-modal-show\" data-target=\"#mdl-img-del\"><span class=\"fa fa-times-circle fa-fw\"></span></button>\r\n			<input class=\"btLogoUploadDefault none\" class=\"none\" type=\"file\" accept=\"image/*\">\r\n		</div>\r\n		<p class=\"upper small heading\"><span class=\"underline\">Name</span></p>\r\n		<input type=\"text\" class=\"js-achvr-nm tb tb-light tb-read-only w-auto\" disabled=\"true\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<br />\r\n		<p class=\"upper small heading\"><span class=\"underline\">Achievement</span></p>\r\n		<input type=\"text\" class=\"js-achvr-achvmt tb tb-light tb-read-only w-auto\" disabled=\"true\" value=\"";
  if (helper = helpers.achievement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.achievement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<br />\r\n		<p class=\"upper small heading\"><span class=\"underline\">Description</span></p>\r\n		<textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"js-achvr-desc tb tb-light tb-read-only txt-ar\" disabled=\"true\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.descr), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\r\n		<br />\r\n		<button class=\"bb-achvr-edt\"><span class=\"fa fa-edit fa-fw\"></span></button>\r\n		<button class=\"bb-achvr-del\"><span class=\"fa fa-trash fa-fw\"></span></button>\r\n		<div class=\"js-achvr-save pacer-wrappr center\" style=\"display: none\">\r\n			<button class=\"bb-achvr-save btn-sheen btn-sheen-small btn-sheen-intrctve upper\">\r\n				Save\r\n				<span class=\"sheen\"></span>\r\n			</button>\r\n			<div class=\"pacer\"></div>\r\n		</div>\r\n		<div class=\"overlay\" style=\"display: none\">\r\n			<br />\r\n			<br />\r\n			<p class=\"center white mono bigger\">Deleting...</p>\r\n		</div>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["inst-person"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " mono center white ellipsis\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "bigger";
  }

function program4(depth0,data) {
  
  
  return "big";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " mono center white ellipsis\" title=\"";
  if (helper = helpers.achievement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.achievement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.achievement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.achievement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "person-img-big";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "../";
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "../assets/img/vectors/user.svg";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"msg medium center\">";
  if (helper = helpers.xp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.xp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " year(s) experience</p>\r\n			";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"msg medium center ellipsis\">";
  if (helper = helpers.exam) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.exam); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program20(depth0,data) {
  
  
  return "ellipsis";
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "title=\"";
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program24(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program26(depth0,data) {
  
  
  return "...";
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<hr />\r\n		<div class=\"srch-result-cell\">\r\n			<p class=\"big msg ellipsis\">\r\n				<a href=\"../"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n			</p>\r\n			<span class=\"dp-tiny dp-tiny-medi\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.profileImg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"logo\">\r\n			</span>\r\n		</div>\r\n		";
  return buffer;
  }

  buffer += "<div class=\"srch-result-wrapper inline-blk\">\r\n	<div class=\"srch-result srch-result-cntr\">\r\n		<a href=\"#\" class=\"srch-result-header srch-result-cell js-entity-share\" data-pid=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.achievement), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</a>\r\n		<div class=\"srch-result-cell\">\r\n			<div class=\"inst-person-img ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				<img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"img\">\r\n			</div>\r\n			<p class=\"msg ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " center\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.navi), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.navi), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n		<hr />\r\n		<div class=\"srch-result-cell\">\r\n			<p class=\"msg hint upper small\"><span class=\"underline\">Description</span></p>\r\n			<p class=\"msg hint ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(22, program22, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.descr), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n		</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.owner), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["inst-review"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "assets/img/vectors/user.svg";
  }

function program5(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div class=\"review-data ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n			<p>";
  if (helper = helpers.review) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.review); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n		</div>\r\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "big";
  }

function program12(depth0,data) {
  
  
  return "medium";
  }

function program14(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.getRating || (depth0 && depth0.getRating),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.rating), "infra", options) : helperMissing.call(depth0, "getRating", (depth0 && depth0.rating), "infra", options)));
  }

function program16(depth0,data) {
  
  
  return "0";
  }

function program18(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.infra)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program20(depth0,data) {
  
  
  return "-.-";
  }

function program22(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.getRating || (depth0 && depth0.getRating),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.rating), "faculty", options) : helperMissing.call(depth0, "getRating", (depth0 && depth0.rating), "faculty", options)));
  }

function program24(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.faculty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program26(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.getRating || (depth0 && depth0.getRating),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.rating), "material", options) : helperMissing.call(depth0, "getRating", (depth0 && depth0.rating), "material", options)));
  }

function program28(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.material)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<p class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlighted), {hash:{},inverse:self.program(31, program31, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Review for <span class=\"bold\">";
  if (helper = helpers.center) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.center); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> center</p>\r\n		";
  return buffer;
  }
function program31(depth0,data) {
  
  
  return "small";
  }

  buffer += "<div class=\"review-wrpr inline-blk\">\r\n	<a href=\"reviews?highlight=";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"review t-left js-entity-share\" data-pid=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<div class=\"review-meta\">\r\n			<div class=\"ellipsis\">\r\n				<div class=\"reviewer-img left\">\r\n					<img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"image\">\r\n				</div>\r\n				<span class=\"bold\" title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</span>\r\n				<br />\r\n				<span class=\"small\">"
    + escapeExpression((helper = helpers.getDate || (depth0 && depth0.getDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.reviewedOn), options) : helperMissing.call(depth0, "getDate", (depth0 && depth0.reviewedOn), options)))
    + "</span>\r\n			</div>\r\n		</div>\r\n		<hr />\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.review), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<div style=\"background: rgba(255, 255, 255, 0.05)\">\r\n			<div>\r\n				<div class=\"inline-blk\" style=\"width: 85%; padding: 0 10px 0 0\">\r\n					<p class=\"msg small upper\" style=\"margin-top: 3px\">Infrastructure</p>\r\n					<div class=\"rating-bar-wrapper\" style=\"position: static; background: rgba(0, 0, 0, 0.2); border-radius: 10px; overflow: hidden\">\r\n						<div class=\"rating-bar\" style=\"background: #53777a; width: ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.infra), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%\"></div>\r\n					</div>\r\n				</div><!--\r\n				--><div class=\"inline-blk center\" style=\"width: 15%; line-height: 50px\">\r\n					<span class=\"n-circle inline-blk white\" data-rating=\"infra\" style=\"vertical-align: middle; background: #53777a\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.infra), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n				</div>\r\n			</div>\r\n			<div>\r\n				<div class=\"inline-blk\" style=\"width: 85%; padding: 0 10px 0 0\">\r\n					<p class=\"msg small upper\" style=\"margin-top: 3px\">Faculty</p>\r\n					<div class=\"rating-bar-wrapper\" style=\"position: static; background: rgba(0, 0, 0, 0.2); border-radius: 10px; overflow: hidden\">\r\n						<div class=\"rating-bar\" style=\"background: #3F51B5; width: ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.faculty), {hash:{},inverse:self.program(16, program16, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%\"></div>\r\n					</div>\r\n				</div><!--\r\n				--><div class=\"inline-blk center\" style=\"width: 15%; line-height: 50px\">\r\n					<span class=\"n-circle inline-blk white\" data-rating=\"faculty\" style=\"vertical-align: middle; background: #3F51B5\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.faculty), {hash:{},inverse:self.program(20, program20, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n				</div>\r\n			</div>\r\n			<div>\r\n				<div class=\"inline-blk\" style=\"width: 85%; padding: 0 10px 0 0\">\r\n					<p class=\"msg small upper\" style=\"margin-top: 3px\">Study material</p>\r\n					<div class=\"rating-bar-wrapper\" style=\"position: static; background: rgba(0, 0, 0, 0.2); border-radius: 10px; overflow: hidden\">\r\n						<div class=\"rating-bar\" style=\"background: #009688; width: ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.material), {hash:{},inverse:self.program(16, program16, data),fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%\"></div>\r\n					</div>\r\n				</div><!--\r\n				--><div class=\"inline-blk center\" style=\"width: 15%; line-height: 50px\">\r\n					<span class=\"n-circle inline-blk white\" data-rating=\"material\" style=\"vertical-align: middle; background: #009688\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.rating)),stack1 == null || stack1 === false ? stack1 : stack1.material), {hash:{},inverse:self.program(20, program20, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.center), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</a>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["checkbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\r\n	<input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\" class=\"cb\" data-test-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	<label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"lbl-cb ellipsis\">\r\n		<span></span> ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n	</label>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["question-jumper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#ques-";
  if (helper = helpers.num) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"jumper-";
  if (helper = helpers.num) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-orig-class=\"ques__jumper center big\" class=\"ques__jumper center big\">\r\n	";
  if (helper = helpers.num) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n</a>";
  return buffer;
  });

this["Pluto"]["Templates"]["question-ro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<p class=\"msg big\">";
  if (helper = helpers.ques) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ques); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n	<div class=\"center js-ro-ques-imgs\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.quesImgs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n	<div class=\"js-options\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<img src=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" alt=\"options image\" width=\"100\" style=\"margin: 10px\">\r\n	";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		<div class=\"answ\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n			<input type=\"radio\" id=\"option-"
    + escapeExpression(((stack1 = (depth2 && depth2.quesIdx)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"options-"
    + escapeExpression(((stack1 = (depth2 && depth2.quesIdx)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"js-option\" value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n			<label for=\"option-"
    + escapeExpression(((stack1 = (depth2 && depth2.quesIdx)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<span class=\"bold\">(&#x004"
    + escapeExpression((helper = helpers.incr || (depth2 && depth2.incr),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "incr", (data == null || data === false ? data : data.index), options)))
    + ")</span>\r\n				<span class=\"msg big\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.img), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</label>\r\n		</div>\r\n	";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<img src=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"options image\" width=\"100\" style=\"margin: 10px\">\r\n				";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<p class=\"msg big\">\r\n		<span class=\"bold\">Assertion</span>:\r\n		<span class=\"js-assertion\">";
  if (helper = helpers.assertion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.assertion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	</p>\r\n	<p class=\"msg big\">\r\n		<span class=\"bold\">Reason</span>:\r\n		<span class=\"js-reason\">";
  if (helper = helpers.reason) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reason); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	</p>\r\n	<div class=\"js-options\">\r\n		<p class=\"answ\" data-index=\"0\">\r\n			<input type=\"radio\" id=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-0\" name=\"options-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-option\" value=\"0\">\r\n			<label for=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-0\">\r\n				<span class=\"bold\">(A)</span>\r\n				<span class=\"msg big\">If both assertion and reason are true and reason is the correct explanation of assertion</span>\r\n			</label>\r\n		</p>\r\n		<p class=\"answ\" data-index=\"1\">\r\n			<input type=\"radio\" id=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-1\" name=\"options-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-option\" value=\"1\">\r\n			<label for=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-1\">\r\n				<span class=\"bold\">(B)</span>\r\n				<span class=\"msg big\">If both assertion and reason are true but reason is not the correct explanation of assertion</span>\r\n			</label>\r\n		</p>\r\n		<p class=\"answ\" data-index=\"2\">\r\n			<input type=\"radio\" id=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-2\" name=\"options-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-option\" value=\"2\">\r\n			<label for=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-2\">\r\n				<span class=\"bold\">(C)</span>\r\n				<span class=\"msg big\">If assertion is true but reason is false</span>\r\n			</label>\r\n		</p>\r\n		<p class=\"answ\" data-index=\"3\">\r\n			<input type=\"radio\" id=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-3\" name=\"options-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-option\" value=\"3\">\r\n			<label for=\"option-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-3\">\r\n				<span class=\"bold\">(D)</span>\r\n				<span class=\"msg big\">If both assertion and reason are false</span>\r\n			</label>\r\n		</p>\r\n	</div>\r\n";
  return buffer;
  }

  buffer += "<div id=\"ques-";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-quesid=\"";
  if (helper = helpers.quesId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-question\" style=\"padding: 20px\">\r\n	<p class=\"bold\">\r\n		Ques ";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\r\n		&nbsp;\r\n		<span class=\"fa fa-refresh fa-spin js-anw-loader\" style=\"color: #28c684; display: none\"></span>\r\n	</p>\r\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data},helper ? helper.call(depth0, (depth0 && depth0.quesTypeId), "===", "1", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.quesTypeId), "===", "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.quesTypeId), "===", "2", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.quesTypeId), "===", "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<a href=\"#\" class=\"medium js-reset-options\" data-ques-idx=\"";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">reset options</a>\r\n	&nbsp;&nbsp;\r\n	<a href=\"#\" class=\"medium js-mark-review\" data-ques-idx=\"";
  if (helper = helpers.quesIdx) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesIdx); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-marked=\"false\" tabindex=\"-1\">mark for review</a>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["question"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "style=\"display: none\"";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<p class=\"medium t-right\">\r\n				<a href=\"#edit-ques\" class=\"js-edit-ques\" data-ques-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" tabindex=\"-1\">edit</a>\r\n				&nbsp;\r\n				<a href=\"#delete-ques\" class=\"js-delete-ques\" data-ques-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" tabindex=\"-1\">delete</a>\r\n			</p>\r\n			";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<p class=\"msg hint t-right\">\r\n					Move to\r\n					<select class=\"combo w-auto js-move-to\">\r\n						<option value=\"-1\" disabled=\"disabled\" selected=\"selected\">Please select</option>\r\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</select>\r\n				</p>\r\n			";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n						<option value=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.secName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n						";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"medium t-right\">\r\n				<a href=\"#remove-ques\" class=\"js-remove-ques\" data-ques-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-sec-id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">remove</a>\r\n			</p>\r\n			";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"bold\">Ques.</p>\r\n			<p class=\"msg hint big none tex2jax_ignore js-ques\">";
  if (helper = helpers.ques) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ques); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n			<p class=\"msg hint big\">";
  if (helper = helpers.ques) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ques); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n			<div class=\"center js-ro-ques-imgs\">\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.quesImgs), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</div>\r\n			<br />\r\n			<div class=\"js-options\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.showOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n				<p class=\"bold\">Options</p>\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				<p class=\"medium t-right\">\r\n					<a href=\"#toggle-answer\" class=\"js-view-answ\" data-answer=\"";
  if (helper = helpers.answer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.answer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-revealed=\"false\" tabindex=\"-1\">view answer</a>\r\n				</p>\r\n			</div>\r\n			";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				<img src=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" alt=\"options image\" width=\"100\" style=\"margin: 10px\">\r\n				";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				<div class=\"answ\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n					<span class=\"bold\">(&#x004"
    + escapeExpression((helper = helpers.incr || (depth0 && depth0.incr),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "incr", (data == null || data === false ? data : data.index), options)))
    + ")</span>\r\n					<span class=\"msg hint big none tex2jax_ignore js-op"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n					<span class=\"msg hint big\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.img), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					<span class=\"fa fa-check-circle fa-fw answ__ico--correct\"></span>\r\n				</div>\r\n				";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<img src=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"options image\" width=\"100\" style=\"margin: 10px\">\r\n					";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<p class=\"msg hint big\">\r\n				<span class=\"bold\">Assertion</span>:\r\n				<span class=\"js-assertion\">";
  if (helper = helpers.assertion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.assertion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			</p>\r\n			<p class=\"msg hint big\">\r\n				<span class=\"bold\">Reason</span>:\r\n				<span class=\"js-reason\">";
  if (helper = helpers.reason) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reason); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			</p>\r\n			<br />\r\n			<div class=\"js-options\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.showOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n				<p class=\"bold\">Options</p>\r\n				<p class=\"answ\" data-index=\"0\">\r\n					<span class=\"bold\">(A)</span>\r\n					<span class=\"msg hint big\">If both assertion and reason are true and reason is the correct explanation of assertion</span>\r\n					<span class=\"fa fa-check-circle fa-fw answ__ico--correct\"></span>\r\n				</p>\r\n				<p class=\"answ\" data-index=\"1\">\r\n					<span class=\"bold\">(B)</span>\r\n					<span class=\"msg hint big\">If both assertion and reason are true but reason is not the correct explanation of assertion</span>\r\n					<span class=\"fa fa-check-circle fa-fw answ__ico--correct\"></span>\r\n				</p>\r\n				<p class=\"answ\" data-index=\"2\">\r\n					<span class=\"bold\">(C)</span>\r\n					<span class=\"msg hint big\">If assertion is true but reason is false</span>\r\n					<span class=\"fa fa-check-circle fa-fw answ__ico--correct\"></span>\r\n				</p>\r\n				<p class=\"answ\" data-index=\"3\">\r\n					<span class=\"bold\">(D)</span>\r\n					<span class=\"msg hint big\">If both assertion and reason are false</span>\r\n					<span class=\"fa fa-check-circle fa-fw answ__ico--correct\"></span>\r\n				</p>\r\n				<p class=\"medium t-right\">\r\n					<a href=\"#toggle-answer\" class=\"js-view-answ\" data-answer=\"";
  if (helper = helpers.answer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.answer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-revealed=\"false\" tabindex=\"-1\">view answer</a>\r\n				</p>\r\n			</div>\r\n			";
  return buffer;
  }

function program18(depth0,data) {
  
  
  return "\r\n				<a href=\"#show-options\" class=\"medium js-show-options\" data-revealed=\"false\" tabindex=\"-1\">show options</a>\r\n			";
  }

  buffer += "<div id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"padbox col-4 js-question\">\r\n	<div class=\"tile tile--ques\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hide), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n		<input type=\"hidden\" class=\"js-ques-type\" value=\"";
  if (helper = helpers.quesTypeId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quesTypeId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<div class=\"tile__header grid white big\">\r\n			<div class=\"col col-6 no-gutter js-ques-subj\">";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n			<div class=\"col col-6 no-gutter t-right js-ques-level\">";
  if (helper = helpers.level) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n		</div>\r\n		<div class=\"tile__inner\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditable), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMovable), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isRemovable), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.quesTypeId), "===", "1", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.quesTypeId), "===", "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.quesTypeId), "===", "2", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.quesTypeId), "===", "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.showOptions), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div><!-- .tile -->\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["test-section-ro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	<div class=\"center\">\r\n		<h1>";
  if (helper = helpers.secName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n		<p>No. of questions: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ques)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n	</div>\r\n	<div class=\"sec-ques\" style=\"margin-bottom: 20px\"></div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["test-section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"test-section__wrapper inline-blk\">\r\n	<div class=\"test-section\">\r\n		<p class=\"big bold ellipsis js-sec-name\">";
  if (helper = helpers.secName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n		<form class=\"js-frm-rename-section\" data-sec-id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display: none\">\r\n			<input type=\"text\" class=\"tb tb-light\" value=\"";
  if (helper = helpers.secName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		</form>\r\n		<p class=\"medium t-right\">\r\n			<a href=\"#\" class=\"js-rename-section\" data-sec-id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">rename</a>\r\n			&nbsp;\r\n			<a href=\"#\" class=\"js-delete-section\" data-sec-id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">delete</a>\r\n		</p>\r\n		<div class=\"section-ques\" data-sec-id=\"";
  if (helper = helpers.secId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Pluto"]["Templates"]["test-series-thumbnail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.desc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.desc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "No description";
  }

  buffer += "<div class=\"padbox col-4 inline-blk js-test-series-thumb\">\r\n	<div class=\"tile\">\r\n		<div class=\"tile__inner\">\r\n			<div style=\"min-height: 120px\">\r\n				<span class=\"bold bigger\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n				<br />\r\n				<span class=\"msg big\">\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.desc), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</span>\r\n				<br />\r\n				<div class=\"grid\">\r\n					<div class=\"col col-6 no-gutter\">\r\n						<a href=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "institute/online-tests/test-series/save?mode=edit&id="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"medium\">edit</a>\r\n						&nbsp;\r\n						<a href=\"#delete-test-series\" class=\"medium js-delete-test-series\" data-test-series-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">delete</a>\r\n					</div>\r\n					<div class=\"col col-6 no-gutter t-right\">\r\n						<p class=\"msg big\">\r\n							<span class=\"mono\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tests)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> tests\r\n						</p>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<hr />\r\n			<p class=\"msg big t-right\">\r\n				<a href=\"#\" class=\"medium\">view tests</a>\r\n			</p>\r\n		</div><!-- .tile__inner -->\r\n	</div><!-- .tile -->\r\n</div><!-- .padbox -->";
  return buffer;
  });

this["Pluto"]["Templates"]["test-summary"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<span class=\"dp-tiny dp-tiny-medi\">\r\n			<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studMeta)),stack1 == null || stack1 === false ? stack1 : stack1.profileImg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"img\">\r\n		</span>\r\n		"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studMeta)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"medium\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studMeta)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	Test attempted on "
    + escapeExpression((helper = helpers.getDateAndTime || (depth0 && depth0.getDateAndTime),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.startTime), options) : helperMissing.call(depth0, "getDateAndTime", ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.startTime), options)))
    + "\r\n	<table>\r\n		<tr>\r\n			<td>Correct answers</td>\r\n			<td class=\"center\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.correctQues)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Incorrect answers</td>\r\n			<td class=\"center\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.incorrectQues)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Questions attempted</td>\r\n			<td class=\"center\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.attemptedQues)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Total questions</td>\r\n			<td class=\"center\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.totalQues)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Marks</td>\r\n			<td class=\"center\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.marks)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.maxMarks)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Time taken (hh:mm:ss)</td>\r\n			<td class=\"center\">"
    + escapeExpression((helper = helpers.formatSeconds || (depth0 && depth0.formatSeconds),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.timeTaken), false, options) : helperMissing.call(depth0, "formatSeconds", ((stack1 = (depth0 && depth0.attemptMeta)),stack1 == null || stack1 === false ? stack1 : stack1.timeTaken), false, options)))
    + "</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Test duration (hh:mm:ss)</td>\r\n			<td class=\"center\">"
    + escapeExpression((helper = helpers.formatSeconds || (depth0 && depth0.formatSeconds),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeDur), true, options) : helperMissing.call(depth0, "formatSeconds", (depth0 && depth0.timeDur), true, options)))
    + "</td>\r\n		</tr>\r\n	</table>\r\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	Duration: ";
  if (helper = helpers.timeDur) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeDur); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " mins\r\n	<br />\r\n	<a href=\"";
  if (helper = helpers.takeTestLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.takeTestLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">take this test</a>\r\n	";
  return buffer;
  }

  buffer += "<li>\r\n	<span class=\"bigger js-summary-head\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studMeta), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</span>\r\n	<br />\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attemptMeta), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</li>";
  return buffer;
  });

this["Pluto"]["Templates"]["test-thumbnail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.desc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.desc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "No description";
  }

function program5(depth0,data) {
  
  
  return "\r\n			<p class=\"msg medium\">N.A.</p>\r\n			";
  }

function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n			<div class=\"grid msg medium\">\r\n				<div class=\"col col-5 no-gutter\">"
    + escapeExpression((helper = helpers.getDateAndTime || (depth0 && depth0.getDateAndTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.aliveFrom), options) : helperMissing.call(depth0, "getDateAndTime", (depth0 && depth0.aliveFrom), options)))
    + "</div>\r\n				<div class=\"col col-2 no-gutter center\">to</div>\r\n				<div class=\"col col-5 no-gutter t-right\">"
    + escapeExpression((helper = helpers.getDateAndTime || (depth0 && depth0.getDateAndTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.aliveTo), options) : helperMissing.call(depth0, "getDateAndTime", (depth0 && depth0.aliveTo), options)))
    + "</div>\r\n			</div>\r\n			";
  return buffer;
  }

  buffer += "<div class=\"padbox col-4 inline-blk js-test-thumb\">\r\n	<div class=\"tile\">\r\n		<div class=\"tile__inner\">\r\n			<div style=\"min-height: 120px\">\r\n				<span class=\"bold bigger\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n				<br />\r\n				<span class=\"msg big\">\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.desc), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</span>\r\n				<br />\r\n				<div class=\"grid\">\r\n					<div class=\"col col-6 no-gutter\">\r\n						<a href=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "institute/online-tests/save?mode=edit&id="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"medium\">edit test</a>\r\n						&nbsp;\r\n						<a href=\"#delete-test\" class=\"medium js-delete-test\" data-test-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">delete test</a>\r\n					</div>\r\n					<div class=\"col col-6 no-gutter t-right\">\r\n						<p class=\"msg big\">\r\n							<span class=\"mono\">"
    + escapeExpression((helper = helpers.getQuesCount || (depth0 && depth0.getQuesCount),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.body), options) : helperMissing.call(depth0, "getQuesCount", (depth0 && depth0.body), options)))
    + "</span> questions\r\n						</p>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<hr />\r\n			<p class=\"msg small upper\"><span class=\"underline\">Test timeline</span></p>\r\n			";
  stack1 = (helper = helpers.isAllFalsy || (depth0 && depth0.isAllFalsy),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.aliveFrom), (depth0 && depth0.aliveTo), options) : helperMissing.call(depth0, "isAllFalsy", (depth0 && depth0.aliveFrom), (depth0 && depth0.aliveTo), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<br />\r\n			<p class=\"msg big t-right\">\r\n				<a href=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "online-tests/reports/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"medium\">view reports</a>\r\n				&nbsp;\r\n				<a href=\"";
  if (helper = helpers.hostName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hostName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "online-tests/conduct/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._id)),stack1 == null || stack1 === false ? stack1 : stack1.$oid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"medium\">preview</a>\r\n				&nbsp;\r\n				<span class=\"fa fa-clock-o fa-fw\"></span> ";
  if (helper = helpers.timeDur) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeDur); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " mins\r\n			</p>\r\n		</div><!-- .tile__inner -->\r\n	</div><!-- .tile -->\r\n</div><!-- .padbox -->";
  return buffer;
  });

this["Pluto"]["Templates"]["profile-exams"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<div class=\"cb-grp-container\">\r\n	<p class=\"cb-grp-heading upper\"><span>";
  if (helper = helpers.catName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.catName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></p>\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.exams), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	<div class=\"check-wrapper\">\r\n		<input id=\"cb-"
    + escapeExpression((helper = helpers.noSpace || (depth0 && depth0.noSpace),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.examName), options) : helperMissing.call(depth0, "noSpace", (depth0 && depth0.examName), options)))
    + "\" type=\"checkbox\" class=\"cb\" data-exam-id=\"";
  if (helper = helpers.examName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.examName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<label for=\"cb-"
    + escapeExpression((helper = helpers.noSpace || (depth0 && depth0.noSpace),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.examName), options) : helperMissing.call(depth0, "noSpace", (depth0 && depth0.examName), options)))
    + "\" class=\"lbl-cb\">\r\n			<span></span> ";
  if (helper = helpers.examName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.examName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</label>\r\n	</div>\r\n	";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Pluto"]["Templates"]["team-member"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "../";
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "../assets/img/vectors/user.svg";
  }

function program5(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.descr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  
  return "...";
  }

  buffer += "<div class=\"tm-membr-cntnr inline-blk t-left\">\r\n	<div class=\"tm-membr\">\r\n		<input class=\"js-membr-id\" type=\"hidden\" value=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<input class=\"js-membr-img\" type=\"hidden\" value=\"";
  if (helper = helpers.profileImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<div class=\"left tm-membr-img js-img-upload-ctrl\">\r\n			<img class=\"js-img-upload\" src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.profileImg), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"team member photo\" data-upload-type=\"TEAM_IMAGE\" data-owner=\"";
  if (helper = helpers.pid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			<button class=\"btLogoUpload\"><span class=\"fa fa-upload fa-fw\"></span> Upload</button>\r\n			<button class=\"btLogoRemove js-modal-show\" data-target=\"#mdl-img-del\"><span class=\"fa fa-times-circle fa-fw\"></span></button>\r\n			<input class=\"btLogoUploadDefault none\" class=\"none\" type=\"file\" accept=\"image/*\">\r\n		</div>\r\n		<p class=\"upper small heading\"><span class=\"underline\">Name</span></p>\r\n		<input type=\"text\" class=\"js-membr-nm tb tb-light tb-read-only w-auto\" disabled=\"true\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<br />\r\n		<p class=\"upper small heading\"><span class=\"underline\">Designation</span></p>\r\n		<input type=\"text\" class=\"js-membr-ttle tb tb-light tb-read-only w-auto\" disabled=\"true\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<br />\r\n		<p class=\"upper small heading\"><span class=\"underline\">Description</span></p>\r\n		<textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"js-membr-desc tb tb-light tb-read-only txt-ar\" disabled=\"true\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.descr), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\r\n		<br />\r\n		<button class=\"bb-membr-edt\"><span class=\"fa fa-edit fa-fw\"></span></button>\r\n		<button class=\"bb-membr-del\"><span class=\"fa fa-trash fa-fw\"></span></button>\r\n		<div class=\"js-membr-save pacer-wrappr center\" style=\"display: none\">\r\n			<button class=\"bb-membr-save btn-sheen btn-sheen-small btn-sheen-intrctve upper\">\r\n				Save\r\n				<span class=\"sheen\"></span>\r\n			</button>\r\n			<div class=\"pacer\"></div>\r\n		</div>\r\n		<div class=\"overlay\" style=\"display: none\">\r\n			<br />\r\n			<br />\r\n			<p class=\"center white mono bigger\">Deleting...</p>\r\n		</div>\r\n	</div>\r\n</div>";
  return buffer;
  });