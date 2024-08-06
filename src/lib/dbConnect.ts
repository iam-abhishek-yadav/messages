import mongoose from 'mongoose';

type ConnectionObject = {
	isConnected?: number;
};

const connection: ConnectionObject = {};

export const dbConnect = async (): Promise<void> => {
	if (connection.isConnected) {
		return;
	} else {
		if (mongoose.connections.length > 0) {
			connection.isConnected = mongoose.connections[0].readyState;
			if (connection.isConnected === 1) {
				return;
			}

			await mongoose.disconnect();
		}

		try {
			const db = await mongoose.connect(process.env.MONGODB_URI!);
			connection.isConnected = db.connections[0].readyState;
		} catch (error) {
			console.error(error);
			process.exit(1);
		}
	}
};
