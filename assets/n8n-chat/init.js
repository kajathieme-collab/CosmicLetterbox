import { createChat } from './chat.bundle.es.js';

console.info('[CosmicLetterbox] Initializing n8n chat widget');

createChat({
	webhookUrl: 'https://n8n.srv1044671.hstgr.cloud/webhook/4533e730-1c3d-42d6-aa52-9177f75c0cd9/chat',
	webhookConfig: {
		method: 'POST',
		headers: {},
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		'I am your cosmic ordering assistant. Ask me anything about the topic. Shall we get started?'
	],
	i18n: {
		en: {
			title: 'Universe calling! 🔮',
			subtitle: "We're here 24/7.",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
		},
	},
	enableStreaming: false,
});

