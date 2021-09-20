namespace $ {
	export class $my_debug extends $mol_page {
		
		/**
		 * ```tree
		 * domain $my_debug_domain
		 * ```
		 */
		@ $mol_mem
		domain() {
			const obj = new this.$.$my_debug_domain()
			
			return obj
		}
		
		/**
		 * ```tree
		 * title @ \Sign_in
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$my_debug_title' )
		}
		
		/**
		 * ```tree
		 * body / <= Sign_in_form
		 * ```
		 */
		body() {
			return [
				this.Sign_in_form()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * email_label @ \E-mail
		 * ```
		 */
		email_label() {
			return this.$.$mol_locale.text( '$my_debug_email_label' )
		}
		
		/**
		 * ```tree
		 * email_bid \
		 * ```
		 */
		email_bid() {
			return ""
		}
		
		/**
		 * ```tree
		 * email?val \
		 * ```
		 */
		@ $mol_mem
		email(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Email_control $mol_string value?val <=> email?val
		 * ```
		 */
		@ $mol_mem
		Email_control() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.email(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Email_field $mol_form_field
		 * 	name <= email_label
		 * 	bid <= email_bid
		 * 	control <= Email_control
		 * ```
		 */
		@ $mol_mem
		Email_field() {
			const obj = new this.$.$mol_form_field()
			
			obj.name = () => this.email_label()
			obj.bid = () => this.email_bid()
			obj.control = () => this.Email_control()
			
			return obj
		}
		
		/**
		 * ```tree
		 * pass_label @ \Password
		 * ```
		 */
		pass_label() {
			return this.$.$mol_locale.text( '$my_debug_pass_label' )
		}
		
		/**
		 * ```tree
		 * pass_bid \
		 * ```
		 */
		pass_bid() {
			return ""
		}
		
		/**
		 * ```tree
		 * pass?val \
		 * ```
		 */
		@ $mol_mem
		pass(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Pass_control $mol_string
		 * 	value?val <=> pass?val
		 * 	type \password
		 * ```
		 */
		@ $mol_mem
		Pass_control() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.pass(val)
			obj.type = () => "password"
			
			return obj
		}
		
		/**
		 * ```tree
		 * pass_field $mol_form_field
		 * 	name <= pass_label
		 * 	bid <= pass_bid
		 * 	control <= Pass_control
		 * ```
		 */
		@ $mol_mem
		pass_field() {
			const obj = new this.$.$mol_form_field()
			
			obj.name = () => this.pass_label()
			obj.bid = () => this.pass_bid()
			obj.control = () => this.Pass_control()
			
			return obj
		}
		
		/**
		 * ```tree
		 * sign_in_button_label @ \Sign in
		 * ```
		 */
		sign_in_button_label() {
			return this.$.$mol_locale.text( '$my_debug_sign_in_button_label' )
		}
		
		/**
		 * ```tree
		 * event_submit?val null
		 * ```
		 */
		@ $mol_mem
		event_submit(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Sign_in_button $mol_button_major
		 * 	title <= sign_in_button_label
		 * 	event_click?val <=> event_submit?val
		 * ```
		 */
		@ $mol_mem
		Sign_in_button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.sign_in_button_label()
			obj.event_click = (val?: any) => this.event_submit(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Sign_in_form $mol_form
		 * 	form_fields /
		 * 		<= Email_field
		 * 		<= pass_field
		 * 	buttons / <= Sign_in_button
		 * ```
		 */
		@ $mol_mem
		Sign_in_form() {
			const obj = new this.$.$mol_form()
			
			obj.form_fields = () => [
				this.Email_field(),
				this.pass_field()
			] as readonly any[]
			obj.buttons = () => [
				this.Sign_in_button()
			] as readonly any[]
			
			return obj
		}
	}
	
}

