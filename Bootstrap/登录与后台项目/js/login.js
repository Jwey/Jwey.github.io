
(function($){
				$("#login").validate({
					rules:{
						username:{
							required:true,
							username:true,
						},
						pwd:{
							required:true,
							pwd:true,
						},
					},
					messages:{
						username:{
							required:'*账号不能为空',
						},
						pwd:{
							required:'*密码不能为空',
						},
						code:{
							required:'验证码不能为空'
						}
					},
					/*submitHandler:function(){
						$('[type="submit"]').button('loading');
						$.post('http://192.168.15.2/gz0820web/login',{username:'admin',pwd:'admin'}function(data){
						if(data.status!=1){
							$('[type="submit"]').button('reset');
						}else{
							setInterval(function(){
							location.href="login.html";
						},1000);
					}
						$('.modal-body').text(data.msg);
						$('.modal').modal();
					},'json');
						return false;
					}*/
				});
				$.validator.addMethod("username",function(value,element){
					var userName = /^\w{4,10}$/g;
					return this.optional(element)||(userName.test(value));
				},"*只允许4-12位英文字母、数字或者下画线！");
				$.validator.addMethod("pwd",function(value,element){
					var checkPwd = /^\w{6,16}$/g;
					return this.optional(element)||(checkPwd.test(value));
				},"*只允许6-16位英文字母或者数字！");
			})(jQuery);	















/*(function($){
	
		//验证通过执行的方法
		unhighlight:function(element,error,errorClass){
				$(element).tooltip('destroy');
		},
		//验证未通过执行的方法
		errorPlacement:function(error,element){
			//如果.tooltip存在 即为第二次错误 第二次错误需要修改data-original-title属性 tooltip('show')
			if($(element).next('.tooltip').length>0){
				$(element).attr('data-original-title',error.text()).tooltip('show');
			}else{
				//第一次错误调用的提示
				$(element).attr('title',error.text()).tooltip();
			}
		},
		//所有验证通过准备提交数据
		submitHandler:function(){
			$('[type="submit"]').button('loading');
			$.post('http://192.168.15.2/gz0820web/login',$('#loginForm').serializeArray(),function(data){
				if(data.status!=1){
					$('[type="submit"]').button('reset');
				}else{
					setInterval(function(){
						location.href="index.html";
					},1000);
				}
				$('.modal-body').text(data.msg);
				$('.modal').modal();
			},'json');
			return false;
		}
	});
})(jQuery);*/