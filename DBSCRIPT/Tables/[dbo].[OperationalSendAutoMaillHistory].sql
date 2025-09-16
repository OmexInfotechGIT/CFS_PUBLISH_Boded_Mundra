USE [PREBONDED]
GO

/****** Object:  Table [dbo].[OperationalSendAutoMaillHistory]    Script Date: 09/05/2025 3:03:40 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OperationalSendAutoMaillHistory](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[NotificationType] [nvarchar](max) NULL,
	[MailingPartyID] [bigint] NULL,
	[PartyType] [nvarchar](max) NULL,
	[sentFrom] [nvarchar](max) NULL,
	[sentTo] [nvarchar](max) NULL,
	[CC] [nvarchar](max) NULL,
	[BCC] [nvarchar](max) NULL,
	[Subject] [nvarchar](max) NULL,
	[NotificatiomMSG] [nvarchar](max) NULL,
	[Status] [nvarchar](max) NULL,
	[IsAttachment] [nvarchar](max) NULL,
	[AttachmentUrl] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[OperationalSendAutoMaillHistory] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


