USE [PREBONDED]
GO

/****** Object:  Table [dbo].[OperationalAutoMail]    Script Date: 09/05/2025 3:02:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OperationalAutoMail](
	[PartyType] [varchar](255) NULL,
	[isAttachment] [bit] NULL,
	[attachmentUrl] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


