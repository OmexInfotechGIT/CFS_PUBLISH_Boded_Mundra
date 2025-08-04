USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnEmptyTruckGateInLoaded]    Script Date: 01/08/2024 12:24:42 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyTruckGateInLoaded](
	[trnEmptyTruckGateInLoadedID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnEmptyTruckGateInID] [bigint] NOT NULL,
	[ContNo] [varchar](255) NULL,
	[trnDocumentContainerID] [int] NULL,
	[ISOCode] [varchar](255) NULL,
	[ISOCodeID] [int] NULL,
	[Size] [varchar](255) NULL,
	[SizeID] [int] NULL,
	[ContType] [varchar](255) NULL,
	[ContTypeID] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[Line] [varchar](255) NULL,
	[Agent] [varchar](255) NULL,
	[ContainerStatus] [varchar](255) NULL,
	[Temp] [varchar](255) NULL,
	[UN] [varchar](255) NULL,
	[Class] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[trnexportmovementWOContainerDetailsID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyTruckGateInLoaded] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyTruckGateInLoaded] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


