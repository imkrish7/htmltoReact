import React, { Component } from 'react';
import Style from '../Styles/toc_body.module.scss';
class TOCBody extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Setup
						</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							As the <strong>Mail Provider </strong>is not installed by default, we need to pull it from npm:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>
												{' '}>adonis <span className={Style.highlight}>install</span> @adonisjs/mail
											</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Next, register the provider inside the <span className={Style.file_path}>start/app.js</span> file:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>const providers = [</span>
											<span className={Style.green}>
												'@adonisjs/mail/providers/MailProvider'
											</span>
											<span>]</span>
										</span>
									</code>
								</pre>
							</div>
						</div>

						<div className={Style.note_card}>
							<span className={Style.warning_icon}>i</span>
							<div className={Style.card_content}>
								Mail configuration is saved inside the config/mail.js file, which is created by
								the adonis install command when installing the Mail Provider.
							</div>
						</div>
					</div>
				</div>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Basic Example
						</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Let’s start with the basic example of sending email on user registration:
						</p>

						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>
												Route.<span className={Style.red}>post</span>(<span className={Style.green}>'user', 'UserController.store'</span>)
											</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>const Mail = use('Mail')</span>
											<span />
											<span>
												{'class UserController {'}
											</span>
											<span />
											<span>
												{' async store ({ request }) {'}
											</span>
											<span>
												{' '}const data = request.only(['email', 'username',
												'password'])
											</span>
											<span>const user = await User.create(data)</span>
											<span />
											<span>{`await Mail.send('emails.welcome', user.toJSON(), (message) => {`}</span>
											<span>message</span>
											<span>.to(user.email)</span>
											<span>{`.from('<from-email>')`}</span>
											<span>{`.subject('Welcome to yardstick')`}</span>
											<span>{` })`}</span>
											<span />
											<span>return 'Registered successfully'</span>
											<span>{`}`}</span>
											<span>{`}`}</span>
											<span>{`module.exports = UserController`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Finally, create the emails/welcome.edge view file containing the HTML body:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`<h2> Hello {{ username }} </h2>`}</span>
											<span>{`<p>`}</span>
											<span>
												{' '}Welcome to the yardstick club, here's your getting started
												guide
											</span>
											<span>{`</p>`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Mail API
						</h2>
					</div>
					<div className={Style.text}>Below is the list of methods you can use to send emails.</div>
					<strong>send(views, data, callback)</strong>
					<div className={Style.content}>
						<p className={Style.content_text}>Send email using one or many Edge views:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`await Mail.send('view', data, (message) => {`}</span>
											<span> message</span>
											<span>.from('')</span>
											<span>.to('')</span>
											<span>{`})`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							The views argument can be a single view or array of views per content type:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`await Mail.send(['welcome', 'welcome.text'])`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
						<div className={Style.content_text}>
							In the example above, the welcome view is used for the HTML version of the email,
							while the welcome.text view is used for the plain text version.
						</div>
					</div>
					<div className={Style.note_card}>
						<span className={Style.tip_icon}>
							<i className="fa fa-bolt" />
						</span>
						<div className={Style.card_content}>
							If you’re using Edge as your template engine, you can also use ‑text instead of
							.text as the plain text body template suffix.
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Using template suffixes, you can also set the mail body for Apple watch:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>
												await Mail.send(['welcome', 'welcome.text', 'welcome.watch'])
											</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subsection_head}>
						<h2>raw(body, callback)</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Use a raw string to send the mail (when the string is HTML the email HTML body will
							be set, otherwise just a plain text email will be sent):
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`await Mail.raw('plain text email', (message) => {`}</span>
											<span>{`message.from('foo@bar.com')`}</span>
											<span>{`message.to('baz@bar.com')`}</span>
											<span>{`})`}</span>
											<span />
											<span>{`await Mail.raw('<h1> HTML email </h1>', (message) => `}</span>
											<span>{` message.from('foo@bar.com')`}</span>
											<span>{`message.to('baz@bar.com')`}</span>
											<span>{`})`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Message API
						</h2>
					</div>

					<div className={Style.small_summry}>
						Below is the list of methods you can use to build a mail message using the fluent
						message API.
					</div>
					<div className={Style.subheader_sub}>
						<h2>to(address, [name])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Set to address:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.to(user.email)</span>
											<span />
											<span>// with email and name both</span>
											<span>message.to(user.email, user.name)</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>from(address, [name])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Set from address:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.from('team@yardstick.io')</span>
											<span />
											<span>// with email and name both</span>
											<span>message.from('team@yardstick.io', 'Yardstick')</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>cc(address, [name])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Add cc address to the email:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.cc(user.email)</span>
											<span />
											<span>// with email and name both</span>
											<span>message.cc(user.email, user.name)</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>bcc(address, [name])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Add bcc address to the email:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.bcc(user.email)</span>
											<span />
											<span>// with email and name both</span>
											<span>message.bcc(user.email, user.name)</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.note_card}>
						<span className={Style.warning_icon}>i</span>
						<div className={Style.card_content}>
							You can call the above methods multiple times to define multiple addresses.
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>replyTo(address, [name])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Set replyTo email address:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.replyTo('noreply@yardstick.io')</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>inReplyTo(messageId)</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Set email message id:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.inReplyTo(someThread.id)</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>subject(value)</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Set email subject:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.subject('Welcome to yardstick')</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>text(value)</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Manually set the plain text body for the email:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.text('Email plain text version')</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>attach(filePath, [options])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Attach file(s) to the email:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message</span>
											<span>.attach(Helpers.tmpPath('guides/getting-started.pdf'))</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Set custom file name:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message</span>
											<span>{`.attach(Helpers.tmpPath('guides/getting-started.pdf'), {`}</span>
											<span>filename: 'Getting-Started.pdf'</span>
											<span>{`})`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>attachData(data, filename, [options])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Attach raw data as a String, Buffer or Stream:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`message.attachData('hello', 'hello.txt')`}</span>
											<span />
											<span>{`// buffer`}</span>
											<span>{`message.attachData(new Buffer('hello'), 'hello.txt')`}</span>
											<span />
											<span>{`// stream`}</span>
											<span>
												{`message.attachData(fs.createReadStream('hello.txt'), 'hello.txt'`}
											</span>
											<span />
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>embed(filePath, cid, [options])</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Embed an image into the HTML body using a content id:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>message.embed(Helpers.publicPath('logo.png'), 'logo')</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Then inside the template, you can say:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`<img src="cid:logo" />`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.note_card}>
						<span className={Style.warning_icon}>i</span>
						<div className={Style.card_content}>
							Ensure the cid is unique for each image in a given email.
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>driverExtras(extras)</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>Pass an object of values to the current driver:</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`message.driverExtras({ campaign_id: 20 })`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content_text}>
						The Mail Provider passes the object through to the driver, and it is up to the driver to
						consume these values.
					</div>
				</div>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Switching Connections
						</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							The Mail Provider defines multiple connections inside the config/mail.js file:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`{`}</span>
											<span>{` connection: 'smtp',`}</span>
											<span />
											<span>{`smtp: {},`}</span>
											<span>{`sparkpost: {`}</span>
											<span>{`driver: 'sparkpost',`}</span>
											<span>{`apiKey: Env.get('SPARKPOST_API_KEY'),`}</span>
											<span>{`extras: {}`}</span>
											<span>{`}`}</span>
											<span>{`}`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Using the above configuration, you could switch to the sparkpost connection via the
							connection method like so:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`await Mail`}</span>
											<span>{` .connection('sparkpost')`}</span>
											<span>{`.send('view', data, (message) => {`}</span>
											<span>{`})`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Drivers
						</h2>
					</div>
					<div className={Style.summry}>
						Below are configuration instructions relating to each specific driver.
					</div>
					<div className={Style.subheader_sub}>
						<h2>driverExtras(extras)</h2>
					</div>
					<div className={Style.content_text}>The ses driver requires the aws-sdk package.</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Ensure to install it via npm before using the ses driver:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`> npm i aws-sdk`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>driverExtras(extras)</h2>
					</div>
					<div className={Style.content_text}>The ses driver requires the aws-sdk package.</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							Ensure to install it via npm before using the ses driver:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`> npm i aws-sdk`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>driverExtras(extras)</h2>
					</div>

					<div className={Style.content}>
						<p className={Style.content_text}>
							The sparkpost driver accepts an optional extras configuration object:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`{`}</span>
											<span>{`  extras: {`}</span>
											<span>{` campaign_id: '',`}</span>
											<span>{`  options: {}`}</span>
											<span>{`}`}</span>
											<span>{`}`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.summry}>
						Check out SparkPost’s documentation to learn more about their available options.
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							You can also pass extras at runtime using the driverExtras method:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`await Mail.send('view', data, (message) => {`}</span>
											<span>{`message.driverExtras({`}</span>
											<span>{`  campaign_id: '',`}</span>
											<span>{`  options: {}`}</span>
											<span>{`})`}</span>
											<span>{`})`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.subheader_sub}>
						<h2>Mailgun</h2>
					</div>

					<div className={Style.content}>
						<p className={Style.content_text}>
							The mailgun driver accepts an optional extras configuration object:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`{`}</span>
											<span>{`  extras: {`}</span>
											<span>{`'o:tag': '',`}</span>
											<span>{`'o:campaign': ''`}</span>
											<span>{`}`}</span>
											<span>{`}`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
					<div className={Style.summry}>
						Check out Mailgun’s documentation to learn more about their available options.
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							You can also pass extras at runtime using the driverExtras method:
						</p>
						<div className={Style.code_wrapper}>
							<div className={Style.code_line_wrapper}>
								<pre className={Style.code}>
									<code className={Style.code_lines}>
										<span className={Style.line_numbers}>
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
											<span className={Style.counter} />
										</span>
										<span className={Style.code_text}>
											<span>{`await Mail.send('view', data, (message) => {`}</span>
											<span>{`   message.driverExtras({`}</span>
											<span>{`'o:tag': '',`}</span>
											<span>{`'o:campaign': ''`}</span>
											<span>{`})`}</span>
											<span>{`})`}</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default TOCBody;