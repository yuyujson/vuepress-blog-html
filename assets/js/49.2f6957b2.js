(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{567:function(n,t,o){"use strict";o.r(t);var l=o(29),e=Object(l.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h2",{attrs:{id:"区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[n._v("#")]),n._v(" 区别：")]),n._v(" "),o("ol",[o("li",[n._v("InnoDB支持事务，MyISAM不支持，对于InnoDB每一条SQL语言都默认封装成事务，自动提交，这样会影响速度，所以最好把多条SQL语言放在begin和commit之间，组成一个事务；")]),n._v(" "),o("li",[n._v("InnoDB支持外键，而MyISAM不支持。对一个包含外键的InnoDB表转为MYISAM会失败；")]),n._v(" "),o("li",[n._v("InnoDB是聚集索引，数据文件是和索引绑在一起的，必须要有主键，通过主键索引效率很高。但是辅助索引需要两次查询，先查询到主键，然后再通过主键查询到数据。因此，主键不应该过大，因为主键太大，其他索引也都会很大。而MyISAM是非聚集索引，数据文件是分离的，索引保存的是数据文件的指针。主键索引和辅助索引是独立的。")]),n._v(" "),o("li",[n._v("InnoDB不保存表的具体行数，执行select count(*) from table时需要全表扫描。而MyISAM用一个变量保存了整个表的行数，执行上述语句时只需要读出该变量即可，速度很快；")]),n._v(" "),o("li",[n._v("Innodb不支持全文索引，而MyISAM支持全文索引，查询效率上MyISAM要高；"),o("br")])]),n._v(" "),o("h2",{attrs:{id:"如何选择"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#如何选择"}},[n._v("#")]),n._v(" 如何选择：")]),n._v(" "),o("ol",[o("li",[n._v("是否要支持事务，如果要请选择innodb，如果不需要可以考虑MyISAM；")]),n._v(" "),o("li",[n._v("如果表中绝大多数都只是读查询，可以考虑MyISAM，如果既有读写也挺频繁，请使用InnoDB。")]),n._v(" "),o("li",[n._v("系统奔溃后，MyISAM恢复起来更困难，能否接受；")]),n._v(" "),o("li",[n._v("MySQL5.5版本开始Innodb已经成为Mysql的默认引擎(之前是MyISAM)，说明其优势是有目共睹的，如果你不知道用什么，那就用InnoDB，至少不会差。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);